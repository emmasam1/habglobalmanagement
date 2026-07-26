"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ImagePlus,
  LoaderCircle,
  Plus,
  Save,
  Trash2,
  X,
} from "lucide-react";

import serviceApi from "@/api/serviceApi";
import DashboardLayout from "@/components/admin/dashboard/DashboardLayout";

const SERVICES_ROUTE =
  "/admin-dashboard/service";

const MAX_IMAGE_SIZE = 5 * 1024 * 1024;

const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
];

const ICON_OPTIONS = [
  "BriefcaseBusiness",
  "Settings2",
  "TrendingUp",
  "CircleCheckBig",
  "Search",
  "ClipboardList",
  "ClipboardCheck",
  "ShieldCheck",
  "HeartPulse",
  "GraduationCap",
  "Users",
  "Handshake",
  "Landmark",
  "Plane",
  "Lightbulb",
  "Target",
  "Workflow",
  "BarChart3",
  "Building2",
  "FileCheck2",
  "Gauge",
  "Activity",
  "BadgeCheck",
  "CheckCircle2",
  "Sparkles",
];

const ACCENT_OPTIONS = [
  {
    value: "gold",
    label: "Gold",
  },
  {
    value: "blue",
    label: "Blue",
  },
  {
    value: "emerald",
    label: "Emerald",
  },
  {
    value: "violet",
    label: "Violet",
  },
  {
    value: "red",
    label: "Red",
  },
  {
    value: "orange",
    label: "Orange",
  },
  {
    value: "cyan",
    label: "Cyan",
  },
];

const INITIAL_FORM = {
  title: "",
  badge: "",
  shortDescription: "",
  overview: "",
  icon: "BriefcaseBusiness",
  accent: "gold",
  price: "",
  duration: "",
  featured: false,
  active: true,
  challenges: [""],
  included: [""],
  benefits: [""],
  outcomes: [
    {
      title: "",
      description: "",
      icon: "TrendingUp",
    },
  ],
  industries: [""],
  faq: [
    {
      question: "",
      answer: "",
    },
  ],
};

export default function CreateServicePage({
  editSlug = "",
}) {
  const router = useRouter();
  const imageInputRef = useRef(null);
  const imagePreviewUrlRef = useRef("");
  const editing = Boolean(editSlug);

  const [form, setForm] =
    useState(INITIAL_FORM);
  const [serviceId, setServiceId] =
    useState("");
  const [existingImage, setExistingImage] =
    useState("");
  const [loadingService, setLoadingService] =
    useState(editing);
  const [heroImage, setHeroImage] =
    useState(null);
  const [imagePreview, setImagePreview] =
    useState("");
  const [submitting, setSubmitting] =
    useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!editSlug) return;

    let active = true;

    const loadService = async () => {
      try {
        setLoadingService(true);
        setError("");

        const response =
          await serviceApi.getService(editSlug);

        const service =
          response?.data || response;

        if (!service?._id) {
          throw new Error(
            "The service could not be found.",
          );
        }

        if (!active) return;

        setServiceId(service._id);
        setExistingImage(
          service.heroImage || "",
        );
        setForm(serviceToForm(service));
      } catch (requestError) {
        if (!active) return;

        setError(
          getErrorMessage(
            requestError,
            "Unable to load the service.",
          ),
        );
      } finally {
        if (active) {
          setLoadingService(false);
        }
      }
    };

    loadService();

    return () => {
      active = false;
    };
  }, [editSlug]);

  useEffect(
    () => () => {
      if (imagePreviewUrlRef.current) {
        URL.revokeObjectURL(
          imagePreviewUrlRef.current,
        );
      }
    },
    [],
  );

  const updateField = (field, value) => {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (
      !ALLOWED_IMAGE_TYPES.includes(
        file.type,
      )
    ) {
      setError(
        "Please select a JPG, PNG or WEBP image.",
      );
      event.target.value = "";
      return;
    }

    if (file.size > MAX_IMAGE_SIZE) {
      setError(
        "The cover image must not be larger than 5 MB.",
      );
      event.target.value = "";
      return;
    }

    setError("");
    setHeroImage(file);

    if (imagePreviewUrlRef.current) {
      URL.revokeObjectURL(
        imagePreviewUrlRef.current,
      );
    }

    const previewUrl =
      URL.createObjectURL(file);

    imagePreviewUrlRef.current =
      previewUrl;
    setImagePreview(previewUrl);
  };

  const removeImage = () => {
    setHeroImage(null);
    setImagePreview("");

    if (imagePreviewUrlRef.current) {
      URL.revokeObjectURL(
        imagePreviewUrlRef.current,
      );
      imagePreviewUrlRef.current = "";
    }

    if (imageInputRef.current) {
      imageInputRef.current.value = "";
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (submitting) return;

    const validationMessage =
      validateService(form);

    if (validationMessage) {
      setError(validationMessage);
      scrollToTop();
      return;
    }

    try {
      setSubmitting(true);
      setError("");

      const formData = buildServiceFormData(
        form,
        heroImage,
      );

      const response = editing
        ? await serviceApi.updateService(
            serviceId,
            formData,
          )
        : await serviceApi.createService(
            formData,
          );

      if (response?.success === false) {
        throw new Error(
          response?.message ||
            (editing
              ? "Unable to update the service."
              : "Unable to create the service."),
        );
      }

      router.replace(SERVICES_ROUTE);
      router.refresh();
    } catch (requestError) {
      console.error(
        editing
          ? "Update service error:"
          : "Create service error:",
        requestError,
      );

      setError(
        getErrorMessage(
          requestError,
          editing
            ? "Unable to update the service."
            : "Unable to create the service.",
        ),
      );

      scrollToTop();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-7xl">
        <PageHeader
          submitting={submitting}
          editing={editing}
          onBack={() =>
            router.push(SERVICES_ROUTE)
          }
        />

        {error && (
          <ErrorMessage
            message={error}
            onDismiss={() => setError("")}
          />
        )}

        {loadingService ? (
          <ServiceFormSkeleton />
        ) : (
        <form
          id="service-form"
          onSubmit={handleSubmit}
          className="mt-8"
        >
          <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
            <main className="space-y-6">
              <SectionCard
                title="Basic service information"
                description="Enter the main information clients will see."
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <FormField
                      label="Service name"
                      htmlFor="title"
                      hint="The URL slug will be generated automatically."
                      required
                    >
                      <input
                        id="title"
                        type="text"
                        value={form.title}
                        onChange={(event) =>
                          updateField(
                            "title",
                            event.target.value,
                          )
                        }
                        placeholder="Business Solutions"
                        className={inputClasses}
                        required
                      />
                    </FormField>
                  </div>

                  <FormField
                    label="Service badge"
                    htmlFor="badge"
                  >
                    <input
                      id="badge"
                      type="text"
                      value={form.badge}
                      onChange={(event) =>
                        updateField(
                          "badge",
                          event.target.value,
                        )
                      }
                      placeholder="Flagship Service"
                      className={inputClasses}
                    />
                  </FormField>

                  <FormField
                    label="Estimated duration"
                    htmlFor="duration"
                  >
                    <input
                      id="duration"
                      type="text"
                      value={form.duration}
                      onChange={(event) =>
                        updateField(
                          "duration",
                          event.target.value,
                        )
                      }
                      placeholder="4–6 weeks"
                      className={inputClasses}
                    />
                  </FormField>

                  <FormField
                    label="Price"
                    htmlFor="price"
                    required
                  >
                    <input
                      id="price"
                      type="number"
                      min="0"
                      step="0.01"
                      value={form.price}
                      onChange={(event) =>
                        updateField(
                          "price",
                          event.target.value,
                        )
                      }
                      placeholder="5000"
                      className={inputClasses}
                      required
                    />
                  </FormField>

                  <FormField
                    label="Service icon"
                    htmlFor="icon"
                    hint="Stored as the Lucide icon name."
                  >
                    <select
                      id="icon"
                      value={form.icon}
                      onChange={(event) =>
                        updateField(
                          "icon",
                          event.target.value,
                        )
                      }
                      className={inputClasses}
                    >
                      {ICON_OPTIONS.map(
                        (icon) => (
                          <option
                            key={icon}
                            value={icon}
                          >
                            {icon}
                          </option>
                        ),
                      )}
                    </select>
                  </FormField>

                  <FormField
                    label="Accent colour"
                    htmlFor="accent"
                  >
                    <select
                      id="accent"
                      value={form.accent}
                      onChange={(event) =>
                        updateField(
                          "accent",
                          event.target.value,
                        )
                      }
                      className={inputClasses}
                    >
                      {ACCENT_OPTIONS.map(
                        (accent) => (
                          <option
                            key={accent.value}
                            value={accent.value}
                          >
                            {accent.label}
                          </option>
                        ),
                      )}
                    </select>
                  </FormField>

                  <div className="sm:col-span-2">
                    <FormField
                      label="Short description"
                      htmlFor="shortDescription"
                      required
                    >
                      <textarea
                        id="shortDescription"
                        value={
                          form.shortDescription
                        }
                        onChange={(event) =>
                          updateField(
                            "shortDescription",
                            event.target.value,
                          )
                        }
                        rows={4}
                        maxLength={300}
                        placeholder="Helping organisations improve performance through strategic consulting."
                        className={textareaClasses}
                        required
                      />

                      <p className="mt-2 text-right text-xs text-text-secondary">
                        {
                          form.shortDescription
                            .length
                        }
                        /300
                      </p>
                    </FormField>
                  </div>
                </div>
              </SectionCard>

              <SectionCard
                title="Service overview"
                description="Explain the service and how it helps clients."
              >
                <FormField
                  label="Overview"
                  htmlFor="overview"
                  required
                >
                  <textarea
                    id="overview"
                    value={form.overview}
                    onChange={(event) =>
                      updateField(
                        "overview",
                        event.target.value,
                      )
                    }
                    rows={10}
                    placeholder="Describe the service in detail."
                    className={textareaClasses}
                    required
                  />
                </FormField>
              </SectionCard>

              <StringListEditor
                title="Client challenges"
                itemName="Challenge"
                items={form.challenges}
                placeholder="Unclear business strategy"
                onChange={(items) =>
                  updateField(
                    "challenges",
                    items,
                  )
                }
              />

              <StringListEditor
                title="What's included"
                itemName="Included item"
                items={form.included}
                placeholder="Business Strategy"
                onChange={(items) =>
                  updateField(
                    "included",
                    items,
                  )
                }
              />

              <StringListEditor
                title="Client benefits"
                itemName="Benefit"
                items={form.benefits}
                placeholder="Better strategic decisions"
                onChange={(items) =>
                  updateField(
                    "benefits",
                    items,
                  )
                }
              />

              <ObjectListEditor
                title="Expected outcomes"
                itemName="Outcome"
                items={form.outcomes}
                defaultItem={{
                  title: "",
                  description: "",
                  icon: "TrendingUp",
                }}
                onChange={(items) =>
                  updateField(
                    "outcomes",
                    items,
                  )
                }
              />

              {/* <ObjectListEditor
                title="Service process"
                itemName="Process step"
                items={form.process}
                defaultItem={{
                  title: "",
                  description: "",
                  icon: "CircleCheckBig",
                }}
                onChange={(items) =>
                  updateField(
                    "process",
                    items,
                  )
                }
              /> */}

              <StringListEditor
                title="Industries served"
                itemName="Industry"
                items={form.industries}
                placeholder="Construction"
                onChange={(items) =>
                  updateField(
                    "industries",
                    items,
                  )
                }
              />

              <FaqEditor
                items={form.faq}
                onChange={(items) =>
                  updateField("faq", items)
                }
              />
            </main>

            <aside className="space-y-6">
              <HeroImageEditor
                imageInputRef={imageInputRef}
                imagePreview={
                  imagePreview ||
                  existingImage
                }
                heroImage={heroImage}
                onImageChange={
                  handleImageChange
                }
                onRemoveImage={removeImage}
              />

              <SectionCard
                title="Publishing settings"
                description="Control how this service appears."
              >
                <div className="space-y-4">
                  <ToggleField
                    label="Publish service"
                    description="Show this service on the public website."
                    checked={form.active}
                    onChange={(checked) =>
                      updateField(
                        "active",
                        checked,
                      )
                    }
                  />

                  <ToggleField
                    label="Feature service"
                    description="Display it in featured sections."
                    checked={form.featured}
                    onChange={(checked) =>
                      updateField(
                        "featured",
                        checked,
                      )
                    }
                  />
                </div>
              </SectionCard>

              <div className="rounded-2xl border border-border bg-surface p-5">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-secondary px-5 font-semibold text-primary transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? (
                    <LoaderCircle
                      size={18}
                      className="animate-spin"
                    />
                  ) : (
                    <Save size={18} />
                  )}

                  {submitting
                    ? editing
                      ? "Updating service..."
                      : "Creating service..."
                    : editing
                      ? "Update service"
                      : "Create service"}
                </button>

                <button
                  type="button"
                  disabled={submitting}
                  onClick={() =>
                    router.push(
                      SERVICES_ROUTE,
                    )
                  }
                  className="mt-3 h-11 w-full rounded-xl border border-border bg-surface text-sm font-semibold text-text-primary transition hover:border-secondary disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Cancel
                </button>
              </div>
            </aside>
          </div>
        </form>
        )}
      </div>
    </DashboardLayout>
  );
}

function PageHeader({
  submitting,
  editing,
  onBack,
}) {
  return (
    <header className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-text-secondary transition hover:text-secondary"
        >
          <ArrowLeft size={17} />
          Back to services
        </button>

        <h1 className="mt-4 text-3xl font-bold text-text-primary">
          {editing
            ? "Edit service"
            : "Create a new service"}
        </h1>

        <p className="mt-2 max-w-2xl text-text-secondary">
          {editing
            ? "Update the service information and publishing settings."
            : "Add the service information, outcomes and publishing settings."}
        </p>
      </div>

      <button
        type="submit"
        form="service-form"
        disabled={submitting}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-secondary px-6 font-semibold text-primary transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? (
          <LoaderCircle
            size={18}
            className="animate-spin"
          />
        ) : (
          <Save size={18} />
        )}

        {submitting
          ? editing
            ? "Updating..."
            : "Creating..."
          : editing
            ? "Update service"
            : "Create service"}
      </button>
    </header>
  );
}

function HeroImageEditor({
  imageInputRef,
  imagePreview,
  heroImage,
  onImageChange,
  onRemoveImage,
}) {
  return (
    <SectionCard
      title="Service cover image"
      description="Upload the main service image."
    >
      <input
        ref={imageInputRef}
        id="heroImage"
        type="file"
        accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
        onChange={onImageChange}
        className="sr-only"
      />

      {imagePreview ? (
        <div className="relative overflow-hidden rounded-xl border border-border bg-surface-secondary">
          <div className="relative aspect-[4/3]">
            <Image
              src={imagePreview}
              alt="Selected service cover"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <button
            type="button"
            onClick={onRemoveImage}
            aria-label="Remove selected image"
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-error text-white transition hover:opacity-90"
          >
            <X size={17} />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() =>
            imageInputRef.current?.click()
          }
          className="flex aspect-[4/3] w-full flex-col items-center justify-center rounded-xl border border-dashed border-border bg-surface-secondary p-6 text-center transition hover:border-secondary"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface text-secondary">
            <ImagePlus size={23} />
          </span>

          <span className="mt-4 font-semibold text-text-primary">
            Select a cover image
          </span>

          <span className="mt-1 text-sm text-text-secondary">
            JPG, PNG or WEBP, maximum 5 MB
          </span>
        </button>
      )}

      {heroImage && (
        <button
          type="button"
          onClick={() =>
            imageInputRef.current?.click()
          }
          className="mt-4 h-11 w-full rounded-xl border border-border bg-surface text-sm font-semibold text-text-primary transition hover:border-secondary hover:text-secondary"
        >
          Change image
        </button>
      )}
    </SectionCard>
  );
}

function SectionCard({
  title,
  description,
  children,
}) {
  return (
    <section className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
      <div className="border-b border-border pb-5">
        <h2 className="text-lg font-bold text-text-primary">
          {title}
        </h2>

        {description && (
          <p className="mt-1 text-sm leading-6 text-text-secondary">
            {description}
          </p>
        )}
      </div>

      <div className="pt-5">{children}</div>
    </section>
  );
}

function FormField({
  label,
  htmlFor,
  hint,
  required = false,
  children,
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-semibold text-text-primary"
      >
        {label}

        {required && (
          <span className="ml-1 text-error">
            *
          </span>
        )}
      </label>

      {children}

      {hint && (
        <p className="mt-2 text-xs leading-5 text-text-secondary">
          {hint}
        </p>
      )}
    </div>
  );
}

function StringListEditor({
  title,
  itemName,
  items,
  placeholder,
  onChange,
}) {
  const updateItem = (index, value) => {
    onChange(
      items.map((item, itemIndex) =>
        itemIndex === index ? value : item,
      ),
    );
  };

  const addItem = () => {
    onChange([...items, ""]);
  };

  const removeItem = (index) => {
    const nextItems = items.filter(
      (_, itemIndex) => itemIndex !== index,
    );

    onChange(
      nextItems.length ? nextItems : [""],
    );
  };

  return (
    <SectionCard title={title}>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={`${title}-${index}`}
            className="rounded-xl border border-border bg-surface-secondary p-4"
          >
            <EditorHeader
              label={`${itemName} ${
                index + 1
              }`}
              removeLabel={`Remove ${itemName} ${
                index + 1
              }`}
              onRemove={() =>
                removeItem(index)
              }
            />

            <input
              type="text"
              value={item}
              onChange={(event) =>
                updateItem(
                  index,
                  event.target.value,
                )
              }
              placeholder={placeholder}
              className={`${inputClasses} mt-3`}
            />
          </div>
        ))}
      </div>

      <AddButton
        label={`Add another ${itemName.toLowerCase()}`}
        onClick={addItem}
      />
    </SectionCard>
  );
}

function ObjectListEditor({
  title,
  itemName,
  items,
  defaultItem,
  onChange,
}) {
  const updateItem = (
    index,
    field,
    value,
  ) => {
    onChange(
      items.map((item, itemIndex) =>
        itemIndex === index
          ? {
              ...item,
              [field]: value,
            }
          : item,
      ),
    );
  };

  const addItem = () => {
    onChange([
      ...items,
      {
        ...defaultItem,
      },
    ]);
  };

  const removeItem = (index) => {
    const nextItems = items.filter(
      (_, itemIndex) => itemIndex !== index,
    );

    onChange(
      nextItems.length
        ? nextItems
        : [{ ...defaultItem }],
    );
  };

  return (
    <SectionCard title={title}>
      <div className="space-y-5">
        {items.map((item, index) => (
          <div
            key={`${title}-${index}`}
            className="rounded-xl border border-border bg-surface-secondary p-4 sm:p-5"
          >
            <EditorHeader
              label={`${itemName} ${
                index + 1
              }`}
              removeLabel={`Remove ${itemName} ${
                index + 1
              }`}
              onRemove={() =>
                removeItem(index)
              }
            />

            <div className="mt-4 grid gap-4">
              <FormField
                label={`${itemName} title`}
                htmlFor={`${toId(
                  title,
                )}-title-${index}`}
              >
                <input
                  id={`${toId(
                    title,
                  )}-title-${index}`}
                  type="text"
                  value={item.title}
                  onChange={(event) =>
                    updateItem(
                      index,
                      "title",
                      event.target.value,
                    )
                  }
                  placeholder={
                    itemName === "Outcome"
                      ? "Improved Operational Efficiency"
                      : "Discovery"
                  }
                  className={inputClasses}
                />
              </FormField>

              <FormField
                label="Description"
                htmlFor={`${toId(
                  title,
                )}-description-${index}`}
              >
                <textarea
                  id={`${toId(
                    title,
                  )}-description-${index}`}
                  value={item.description}
                  onChange={(event) =>
                    updateItem(
                      index,
                      "description",
                      event.target.value,
                    )
                  }
                  rows={4}
                  placeholder="Enter a description."
                  className={textareaClasses}
                />
              </FormField>

              <FormField
                label="Icon"
                htmlFor={`${toId(
                  title,
                )}-icon-${index}`}
              >
                <select
                  id={`${toId(
                    title,
                  )}-icon-${index}`}
                  value={item.icon}
                  onChange={(event) =>
                    updateItem(
                      index,
                      "icon",
                      event.target.value,
                    )
                  }
                  className={inputClasses}
                >
                  {ICON_OPTIONS.map(
                    (icon) => (
                      <option
                        key={icon}
                        value={icon}
                      >
                        {icon}
                      </option>
                    ),
                  )}
                </select>
              </FormField>
            </div>
          </div>
        ))}
      </div>

      <AddButton
        label={`Add another ${itemName.toLowerCase()}`}
        onClick={addItem}
      />
    </SectionCard>
  );
}

function FaqEditor({ items, onChange }) {
  const updateItem = (
    index,
    field,
    value,
  ) => {
    onChange(
      items.map((item, itemIndex) =>
        itemIndex === index
          ? {
              ...item,
              [field]: value,
            }
          : item,
      ),
    );
  };

  const addItem = () => {
    onChange([
      ...items,
      {
        question: "",
        answer: "",
      },
    ]);
  };

  const removeItem = (index) => {
    const nextItems = items.filter(
      (_, itemIndex) => itemIndex !== index,
    );

    onChange(
      nextItems.length
        ? nextItems
        : [
            {
              question: "",
              answer: "",
            },
          ],
    );
  };

  return (
    <SectionCard title="Frequently asked questions">
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={`faq-${index}`}
            className="rounded-xl border border-border bg-surface-secondary p-4"
          >
            <EditorHeader
              label={`Question ${index + 1}`}
              removeLabel={`Remove question ${
                index + 1
              }`}
              onRemove={() =>
                removeItem(index)
              }
            />

            <div className="mt-4 space-y-4">
              <FormField
                label="Question"
                htmlFor={`faq-question-${index}`}
              >
                <input
                  id={`faq-question-${index}`}
                  type="text"
                  value={item.question}
                  onChange={(event) =>
                    updateItem(
                      index,
                      "question",
                      event.target.value,
                    )
                  }
                  placeholder="Who is this service designed for?"
                  className={inputClasses}
                />
              </FormField>

              <FormField
                label="Answer"
                htmlFor={`faq-answer-${index}`}
              >
                <textarea
                  id={`faq-answer-${index}`}
                  value={item.answer}
                  onChange={(event) =>
                    updateItem(
                      index,
                      "answer",
                      event.target.value,
                    )
                  }
                  rows={4}
                  placeholder="Enter a clear answer."
                  className={textareaClasses}
                />
              </FormField>
            </div>
          </div>
        ))}
      </div>

      <AddButton
        label="Add another question"
        onClick={addItem}
      />
    </SectionCard>
  );
}

function EditorHeader({
  label,
  removeLabel,
  onRemove,
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <p className="font-semibold text-text-primary">
        {label}
      </p>

      <button
        type="button"
        onClick={onRemove}
        aria-label={removeLabel}
        className="flex h-9 w-9 items-center justify-center rounded-lg text-error transition hover:bg-error/10"
      >
        <Trash2 size={17} />
      </button>
    </div>
  );
}

function AddButton({ label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-4 inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-surface px-4 text-sm font-semibold text-text-primary transition hover:border-secondary hover:text-secondary"
    >
      <Plus size={17} />
      {label}
    </button>
  );
}

function ToggleField({
  label,
  description,
  checked,
  onChange,
}) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-border bg-surface-secondary p-4">
      <span>
        <span className="block text-sm font-semibold text-text-primary">
          {label}
        </span>

        <span className="mt-1 block text-xs leading-5 text-text-secondary">
          {description}
        </span>
      </span>

      <span className="relative shrink-0">
        <input
          type="checkbox"
          checked={checked}
          onChange={(event) =>
            onChange(event.target.checked)
          }
          className="peer sr-only"
        />

        <span className="block h-7 w-12 rounded-full bg-border transition peer-checked:bg-success" />

        <span className="absolute left-1 top-1 h-5 w-5 rounded-full bg-surface transition peer-checked:translate-x-5" />
      </span>
    </label>
  );
}

function ErrorMessage({
  message,
  onDismiss,
}) {
  return (
    <div
      role="alert"
      className="mt-6 flex items-start justify-between gap-4 rounded-2xl border border-error/30 bg-error/10 p-5"
    >
      <div>
        <p className="font-semibold text-error">
          Unable to create service
        </p>

        <p className="mt-1 text-sm text-text-secondary">
          {message}
        </p>
      </div>

      <button
        type="button"
        onClick={onDismiss}
        aria-label="Dismiss error"
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-error transition hover:bg-error/10"
      >
        <X size={17} />
      </button>
    </div>
  );
}

function ServiceFormSkeleton() {
  return (
    <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
      <div className="space-y-6">
        {Array.from({ length: 4 }).map(
          (_, index) => (
            <div
              key={index}
              className="h-64 animate-pulse rounded-2xl border border-border bg-surface-secondary"
            />
          ),
        )}
      </div>

      <div className="h-96 animate-pulse rounded-2xl border border-border bg-surface-secondary" />
    </div>
  );
}

function serviceToForm(service) {
  const stringItems = (value) =>
    Array.isArray(value) && value.length
      ? value.map((item) =>
          String(item ?? ""),
        )
      : [""];

  const outcomes =
    Array.isArray(service.outcomes) &&
    service.outcomes.length
      ? service.outcomes.map((item) => ({
          title: item?.title || "",
          description:
            item?.description || "",
          icon:
            item?.icon || "TrendingUp",
        }))
      : [
          {
            title: "",
            description: "",
            icon: "TrendingUp",
          },
        ];

  const faq =
    Array.isArray(service.faq) &&
    service.faq.length
      ? service.faq.map((item) => ({
          question: item?.question || "",
          answer: item?.answer || "",
        }))
      : [
          {
            question: "",
            answer: "",
          },
        ];

  return {
    title: service.title || "",
    badge: service.badge || "",
    shortDescription:
      service.shortDescription || "",
    overview: service.overview || "",
    icon:
      service.icon || "BriefcaseBusiness",
    accent: service.accent || "gold",
    price:
      service.price === undefined ||
      service.price === null
        ? ""
        : String(service.price),
    duration: service.duration || "",
    featured: Boolean(service.featured),
    active: service.active !== false,
    challenges: stringItems(
      service.challenges,
    ),
    included: stringItems(
      service.included,
    ),
    benefits: stringItems(
      service.benefits,
    ),
    outcomes,
    industries: stringItems(
      service.industries,
    ),
    faq,
  };
}

function buildServiceFormData(
  form,
  heroImage,
) {
  const formData = new FormData();

  const textFields = [
    "title",
    "badge",
    "shortDescription",
    "overview",
    "icon",
    "accent",
    "price",
    "duration",
  ];

  textFields.forEach((field) => {
    formData.append(
      field,
      String(form[field] ?? "").trim(),
    );
  });

  formData.append(
    "featured",
    String(form.featured),
  );

  formData.append(
    "active",
    String(form.active),
  );

  formData.append(
    "challenges",
    JSON.stringify(
      cleanStringArray(form.challenges),
    ),
  );

  formData.append(
    "included",
    JSON.stringify(
      cleanStringArray(form.included),
    ),
  );

  formData.append(
    "benefits",
    JSON.stringify(
      cleanStringArray(form.benefits),
    ),
  );

  formData.append(
    "industries",
    JSON.stringify(
      cleanStringArray(form.industries),
    ),
  );

  formData.append(
    "outcomes",
    JSON.stringify(
      cleanObjectArray(
        form.outcomes,
        "TrendingUp",
      ),
    ),
  );

  formData.append(
    "faq",
    JSON.stringify(cleanFaq(form.faq)),
  );

  if (heroImage) {
    formData.append(
      "heroImage",
      heroImage,
    );
  }

  return formData;
}

function validateService(form) {
  if (!form?.title?.trim()) {
    return "Service name is required.";
  }

  if (!form?.shortDescription?.trim()) {
    return "Short description is required.";
  }

  if (!form?.overview?.trim()) {
    return "Service overview is required.";
  }

  if (
    form.price === "" ||
    !Number.isFinite(Number(form.price)) ||
    Number(form.price) < 0
  ) {
    return "Enter a valid service price.";
  }

  const outcomes = Array.isArray(
    form.outcomes,
  )
    ? form.outcomes
    : [];

  const invalidOutcome = outcomes.some(
    (item) => {
      const title = String(
        item?.title ?? "",
      ).trim();

      const description = String(
        item?.description ?? "",
      ).trim();

      return description && !title;
    },
  );

  if (invalidOutcome) {
    return "Every outcome with a description must have a title.";
  }

  const faq = Array.isArray(form.faq)
    ? form.faq
    : [];

  const invalidFaq = faq.some((item) => {
    const question = String(
      item?.question ?? "",
    ).trim();

    const answer = String(
      item?.answer ?? "",
    ).trim();

    return (
      (question && !answer) ||
      (!question && answer)
    );
  });

  if (invalidFaq) {
    return "Every FAQ must have both a question and an answer.";
  }

  return "";
}

function cleanStringArray(items = []) {
  if (!Array.isArray(items)) {
    return [];
  }

  return items
    .map((item) =>
      String(item ?? "").trim(),
    )
    .filter(Boolean);
}

function cleanObjectArray(
  items = [],
  defaultIcon,
) {
  if (!Array.isArray(items)) {
    return [];
  }

  return items
    .map((item) => ({
      title: String(
        item?.title ?? "",
      ).trim(),

      description: String(
        item?.description ?? "",
      ).trim(),

      icon:
        String(
          item?.icon ?? "",
        ).trim() || defaultIcon,
    }))
    .filter((item) => item.title);
}

function cleanFaq(items = []) {
  if (!Array.isArray(items)) {
    return [];
  }

  return items
    .map((item) => ({
      question: String(
        item?.question ?? "",
      ).trim(),

      answer: String(
        item?.answer ?? "",
      ).trim(),
    }))
    .filter(
      (item) =>
        item.question && item.answer,
    );
}

function getErrorMessage(
  error,
  fallbackMessage,
) {
  return (
    error?.response?.data?.message ||
    error?.message ||
    fallbackMessage
  );
}

function toId(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const inputClasses =
  "h-12 w-full rounded-xl border border-border bg-surface-secondary px-4 text-text-primary outline-none transition placeholder:text-text-secondary focus:border-secondary";

const textareaClasses =
  "w-full resize-y rounded-xl border border-border bg-surface-secondary px-4 py-3 text-text-primary outline-none transition placeholder:text-text-secondary focus:border-secondary";
