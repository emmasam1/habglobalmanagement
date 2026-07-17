"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import "./contact-form.css"

import { Form, Input, Select, Checkbox, Button, message } from "antd";

import {
  ArrowRight,
  BriefcaseBusiness,
  BadgeCheck,
  ShieldCheck,
  Clock3,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const { TextArea } = Input;

const services = [
  "Business Consultancy",
  "Healthcare Consultancy",
  "Project Management",
  "Corporate Training",
  "Business Advisory",
  "SME Support",
  "Other",
];

export default function ContactForm() {
  const [form] = Form.useForm();

  const [loading, setLoading] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);

    try {
      await new Promise((r) => setTimeout(r, 1800));

      console.log(values);

      message.success("Consultation request sent.");

      setSubmitted(true);

      form.resetFields();
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Blue Glow */}

      <div className="absolute left-[-250px] top-20 h-[550px] w-[550px] rounded-full bg-primary/10 blur-[140px]" />

      {/* Gold Glow */}

      <div className="absolute right-[-220px] bottom-0 h-[500px] w-[500px] rounded-full bg-secondary/10 blur-[140px]" />

      {/* Small Glow */}

      <div className="absolute left-1/2 top-10 h-60 w-60 -translate-x-1/2 rounded-full bg-secondary/5 blur-[100px]" />

      <div className="container relative">
        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-secondary/20 bg-secondary/10 px-6 py-2 text-xs font-semibold uppercase tracking-[.35em] text-secondary">
            CONTACT US
          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight">
            Ready To Start
            <br />A Conversation?
          </h2>

          <p className="mt-6 text-lg leading-9 text-text-secondary">
            Tell us about your business goals and our consultants will get back
            to you within one business day.
          </p>
        </motion.div>

        {/* Floating Card */}

        <div className="relative overflow-hidden rounded-2xl border border-white/20 shadow-[0_35px_80px_rgba(0,0,0,.08)] backdrop-blur-xl">
          {/* Top Glow */}

          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />

          <div className="grid lg:grid-cols-12">
            {/* LEFT PANEL */}

            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="relative overflow-hidden border-r border-border p-10 text-white lg:col-span-4"
            >
              {/* Decorative Glow */}

              <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-secondary/20 blur-[120px]" />

              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
                  <Sparkles size={20} />
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  Why Choose
                  <br />
                  HAB GLOBAL?
                </h3>

                <p className="mt-3 leading-8 text-white/75">
                  Helping organisations grow through practical consultancy,
                  strategic planning and sustainable business solutions.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="space-y-4">
                    <Feature
                      icon={<BriefcaseBusiness size={18} />}
                      title="Experienced Consultants"
                    />

                    <Feature
                      icon={<BadgeCheck size={18} />}
                      title="Tailored Business Solutions"
                    />

                    <Feature
                      icon={<ShieldCheck size={18} />}
                      title="100% Confidential"
                    />

                    <Feature
                      icon={<Clock3 size={18} />}
                      title="Fast Response"
                    />
                  </div>

                  <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                    <p className="text-sm uppercase tracking-[.25em] text-white/60">
                      Average Response
                    </p>

                    <h3 className="mt-3 text-3xl font-bold">24hrs</h3>

                    <p className="mt-4 leading-7 text-white/70">
                      Our consultants typically respond within one business day.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT PANEL */}

            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="p-10 lg:col-span-8 bg-[#0F3D5E]"
            >
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.45,
                    }}
                  >
                    <div className="max-w-3xl bg-[#0F3D5E]">
                      <div>
                        <span className="text-sm font-semibold uppercase tracking-[.25em] text-secondary">
                          CONSULTATION FORM
                        </span>

                        <h3 className="mt-3 text-4xl font-bold">
                          Tell Us About Your Project
                        </h3>

                        <p className="mt-4 leading-8 text-text-secondary">
                          Complete the form below and one of our consultants
                          will contact you within one business day.
                        </p>
                      </div>

                      <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                        className="contact-form mt-12"
                      >
                        {/* PERSONAL */}

                        <div>
                          <h4 className="mb-6 text-xl font-semibold">
                            Personal Information
                          </h4>

                          <div className="grid gap-6 md:grid-cols-2">
                            <Form.Item
                            className="mb-0!"
                              name="name"
                              rules={[
                                {
                                  required: true,
                                  message: "Enter your name",
                                },
                              ]}
                            >
                              <Input size="large" placeholder="Full Name" />
                            </Form.Item>

                            <Form.Item  className="mb-0!" name="company">
                              <Input size="large" placeholder="Company Name" />
                            </Form.Item>

                            <Form.Item
                             className="mb-0!"
                              name="email"
                              rules={[
                                {
                                  required: true,
                                  type: "email",
                                },
                              ]}
                            >
                              <Input size="large" placeholder="Email Address" />
                            </Form.Item>

                            <Form.Item  className="mb-0!" name="phone">
                              <Input size="large" placeholder="Phone Number" />
                            </Form.Item>
                          </div>
                        </div>

                        {/* ENQUIRY */}

                        <div className="mt-8">
                          <h4 className="mb-3 text-xl font-semibold">
                            Consultation Details
                          </h4>

                          <Form.Item
                            name="service"
                            rules={[
                              {
                                required: true,
                                message: "Choose a service",
                              },
                            ]}
                          >
                            <Select
                              size="large"
                              placeholder="Select Service"
                              options={services.map((service) => ({
                                label: service,

                                value: service,
                              }))}
                            />
                          </Form.Item>

                          <Form.Item name="subject">
                            <Input size="large" placeholder="Subject" />
                          </Form.Item>

                          <Form.Item
                            name="message"
                            rules={[
                              {
                                required: true,
                                message: "Tell us about your project",
                              },
                            ]}
                          >
                            <TextArea
                              rows={8}
                              showCount
                              maxLength={1000}
                              placeholder="Describe your project..."
                            />
                          </Form.Item>

                          <Form.Item
                            name="agree"
                            valuePropName="checked"
                            rules={[
                              {
                                validator: (_, value) =>
                                  value
                                    ? Promise.resolve()
                                    : Promise.reject(
                                        new Error(
                                          "Please accept the Privacy Policy",
                                        ),
                                      ),
                              },
                            ]}
                          >
                            <div className="flex justify-between items-center">

                            <Checkbox>
                              I agree to the{" "}
                              <Link
                                href="/privacy"
                                className="font-medium text-secondary!"
                              >
                                Privacy Policy
                              </Link>
                            </Checkbox>

                             <p className="text-sm text-text-secondary">
                              Average response time
                              <strong className="ml-2 text-secondary">
                                24 Hours
                              </strong>
                            </p>
                            </div>
                          </Form.Item>

                          <div className="mt-10 flex items-center justify-end">
                           

                            <motion.div
                              whileHover={{
                                y: -4,
                              }}
                              whileTap={{
                                scale: 0.98,
                              }}
                            >
                              <Button
                                type="primary"
                                htmlType="submit"
                                loading={loading}
                                size="large"
                                className="h-14 rounded-full px-10 shadow-lg"
                              >
                                <span className="flex items-center gap-3">
                                  {loading
                                    ? "Sending..."
                                    : "Request Consultation"}

                                  <motion.div
                                    animate={{
                                      x: [0, 6, 0],
                                    }}
                                    transition={{
                                      repeat: Infinity,
                                      duration: 1.4,
                                    }}
                                  >
                                    <ArrowRight size={18} />
                                  </motion.div>
                                </span>
                              </Button>
                            </motion.div>
                          </div>
                        </div>
                      </Form>
                    </div>
                  </motion.div>
                ) : (
                  <SuccessCard
    reset={() => setSubmitted(false)}
/>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ===========================================================
   SUCCESS CARD
=========================================================== */

function SuccessCard({ reset }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: .95,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: .5,
      }}
      className="relative flex min-h-[720px] flex-col items-center justify-center overflow-hidden text-center"
    >
      {/* Glow */}

      <div className="absolute h-72 w-72 rounded-full bg-green-400/20 blur-[120px]" />

      <motion.div
        initial={{
          scale: 0,
          rotate: -180,
        }}
        animate={{
          scale: 1,
          rotate: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 180,
        }}
        className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full bg-green-100"
      >
        <CheckCircle2
          size={70}
          className="text-green-600"
        />
      </motion.div>

      <motion.h2
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: .25,
        }}
        className="relative z-10 mt-10 text-5xl font-bold"
      >
        Thank You!
      </motion.h2>

      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: .4,
        }}
        className="relative z-10 mt-8 max-w-xl text-lg leading-9 text-text-secondary"
      >
        Your consultation request has been successfully
        received.

        <br />
        <br />

        One of our consultants will contact you
        within one business day.
      </motion.p>

      <div className="relative z-10 mt-14 flex flex-wrap justify-center gap-5">

        <motion.div
          whileHover={{
            y: -4,
          }}
        >
          <Button
            size="large"
            onClick={reset}
            className="rounded-full px-8"
          >
            Send Another Enquiry
          </Button>
        </motion.div>

        <motion.div
          whileHover={{
            y: -4,
          }}
        >
          <Link href="/">

            <Button
              type="primary"
              size="large"
              className="rounded-full px-8"
            >
              Return Home
            </Button>

          </Link>

        </motion.div>

      </div>

    </motion.div>
  );
}


/* ===========================================================
   FEATURE
=========================================================== */

function Feature({
  icon,
  title,
}) {
  return (
    <motion.div
      whileHover={{
        x: 8,
      }}
      transition={{
        duration: .25,
      }}
      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/15 text-secondary transition-all duration-300 group-hover:scale-110">

        {icon}

      </div>

      <span className="font-medium">

        {title}

      </span>

    </motion.div>
  );
}
