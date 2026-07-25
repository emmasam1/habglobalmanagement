// "use client";

// import { useState } from "react";
// import { motion } from "motion/react";
// import { CheckCircle2, ArrowRight } from "lucide-react";

// import services from "@/data/services";
// import { serviceIcons } from "@/lib/serviceIcons";

// import Section from "@/components/layout/Section";
// import PremiumCard from "@/components/ui/PremiumCard";
// import PrimaryButton from "@/components/ui/PrimaryButton";

// export default function StepOne({
//   next,
//   data,
// }) {

//   const [selected, setSelected] = useState(
//     data.service || ""
//   );

//   const selectedService = services.find(
//     (item) => item.slug === selected
//   );

//   return (
//     <Section className="pb-28">

//       <div className="mx-auto max-w-7xl">

//         <div className="mb-14 text-center">

//           <h2 className="text-4xl font-black text-text-primary">
//             Which Service Do You Need?
//           </h2>

//           <p className="mt-5 text-lg text-text-secondary">
//             Choose the consulting service that best matches your
//             current requirements.
//           </p>

//         </div>

//         <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

//           {services.map((service, index) => {

//             const Icon = serviceIcons[service.icon];

//             const active = selected === service.slug;

//             return (

//               <motion.button
//                 key={service.id}
//                 type="button"
//                 onClick={() => setSelected(service.slug)}
//                 initial={{
//                   opacity: 0,
//                   y: 30,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 viewport={{
//                   once: true,
//                 }}
//                 transition={{
//                   delay: index * .08,
//                 }}
//                 whileHover={{
//                   y: -6,
//                 }}
//                 className="text-left"
//               >

//                 <PremiumCard
//                   className={`relative h-full transition-all duration-300

//                   ${
//                     active
//                       ? "border-secondary ring-2 ring-secondary/20"
//                       : ""
//                   }`}
//                 >

//                   {active && (

//                     <div className="absolute right-5 top-5">

//                       <CheckCircle2
//                         className="text-secondary"
//                         size={28}
//                       />

//                     </div>

//                   )}

//                   <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">

//                     <Icon size={30} />

//                   </div>

//                   <h3 className="mt-8 text-2xl font-bold text-text-primary">
//                     {service.title}
//                   </h3>

//                   <p className="mt-5 leading-8 text-text-secondary">
//                     {service.shortDescription}
//                   </p>

//                   <div className="mt-8 space-y-3">

//                     {service.benefits
//                       ?.slice(0, 3)
//                       .map((item) => (

//                         <div
//                           key={item}
//                           className="flex items-center gap-3"
//                         >

//                           <CheckCircle2
//                             size={16}
//                             className="text-secondary"
//                           />

//                           <span className="text-sm text-text-secondary">
//                             {item}
//                           </span>

//                         </div>

//                     ))}

//                   </div>

//                 </PremiumCard>

//               </motion.button>

//             );

//           })}

//         </div>

//         {/* Bottom */}

//         <div className="mt-20 flex items-center justify-between rounded-[32px] border border-border bg-background p-8">

//           <div>

//             <h3 className="text-xl font-bold text-text-primary">

//               {selectedService
//                 ? selectedService.title
//                 : "No Service Selected"}

//             </h3>

//             <p className="mt-2 text-text-secondary">

//               {selectedService
//                 ? "Continue to provide your organisation details."
//                 : "Please select a consulting service to continue."}

//             </p>

//           </div>

//           <PrimaryButton
//             disabled={!selected}
//             onClick={() =>
//               next({
//                 service: selected,
//               })
//             }
//             icon={<ArrowRight size={18} />}
//           >
//             Continue
//           </PrimaryButton>

//         </div>

//       </div>

//     </Section>
//   );
// }

"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  LoaderCircle,
  Sparkles,
} from "lucide-react";

import serviceApi from "@/api/serviceApi";
import { serviceIcons } from "@/lib/serviceIcons";

import Section from "@/components/layout/Section";
import PremiumCard from "@/components/ui/PremiumCard";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function StepOne({ next, data }) {
  const [services, setServices] = useState([]);
  const [selected, setSelected] = useState(data.service || "");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    const loadServices = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await serviceApi.getServices({
          page: 1,
          limit: 50,
        });

        const serviceList = Array.isArray(response)
          ? response
          : response?.data || [];

        const activeServices = serviceList.filter(
          (service) => service?.active !== false,
        );

        if (mounted) {
          setServices(activeServices);
        }
      } catch (err) {
        console.error("Failed to load services:", err);

        if (mounted) {
          setError(
            err?.response?.data?.message ||
              err?.message ||
              "Unable to load services.",
          );
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadServices();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (data.service) {
      setSelected(data.service);
    }
  }, [data.service]);

  const selectedService = useMemo(
    () => services.find((item) => item.slug === selected) || null,
    [services, selected],
  );

  const handleContinue = () => {
    if (!selected || !selectedService) return;

    next({
      service: selectedService.slug,
      serviceData: selectedService,
    });
  };

  return (
    <Section className="pb-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-black text-text-primary">
            Which Service Do You Need?
          </h2>

          <p className="mt-5 text-lg text-text-secondary">
            Choose the consulting service that best matches your current
            requirements.
          </p>
        </div>

        {loading && (
          <div className="flex min-h-[260px] items-center justify-center">
            <div className="flex items-center gap-3 text-text-secondary">
              <LoaderCircle
                size={24}
                className="animate-spin text-secondary"
              />

              <span>Loading services...</span>
            </div>
          </div>
        )}

        {!loading && error && (
          <div className="mx-auto max-w-xl rounded-3xl border border-red-500/20 bg-red-500/5 p-8 text-center">
            <AlertCircle
              size={34}
              className="mx-auto text-red-500"
            />

            <h3 className="mt-4 text-xl font-bold text-text-primary">
              Unable to load services
            </h3>

            <p className="mt-2 text-text-secondary">
              {error}
            </p>
          </div>
        )}

        {!loading && !error && services.length === 0 && (
          <div className="mx-auto max-w-xl rounded-3xl border border-border bg-background p-8 text-center">
            <Sparkles
              size={34}
              className="mx-auto text-secondary"
            />

            <h3 className="mt-4 text-xl font-bold text-text-primary">
              No services available
            </h3>

            <p className="mt-2 text-text-secondary">
              There are currently no active consulting services.
            </p>
          </div>
        )}

        {!loading && !error && services.length > 0 && (
          <>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => {
                const Icon =
                  serviceIcons[service?.icon] || Sparkles;

                const active = selected === service.slug;

                return (
                  <motion.button
                    key={service._id || service.slug}
                    type="button"
                    onClick={() => setSelected(service.slug)}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -6,
                    }}
                    className="h-full text-left"
                  >
                    <PremiumCard
                      className={`relative h-full transition-all duration-300 ${
                        active
                          ? "border-secondary ring-2 ring-secondary/20"
                          : ""
                      }`}
                    >
                      {active && (
                        <div className="absolute right-5 top-5">
                          <CheckCircle2
                            className="text-secondary"
                            size={28}
                          />
                        </div>
                      )}

                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                        <Icon size={30} />
                      </div>

                      <h3 className="mt-8 pr-10 text-2xl font-bold text-text-primary">
                        {service.title}
                      </h3>

                      <p className="mt-5 leading-8 text-text-secondary">
                        {service.shortDescription}
                      </p>

                      {Array.isArray(service.benefits) &&
                        service.benefits.length > 0 && (
                          <div className="mt-8 space-y-3">
                            {service.benefits
                              .slice(0, 3)
                              .map((item, benefitIndex) => (
                                <div
                                  key={`${item}-${benefitIndex}`}
                                  className="flex items-start gap-3"
                                >
                                  <CheckCircle2
                                    size={16}
                                    className="mt-1 shrink-0 text-secondary"
                                  />

                                  <span className="text-sm leading-6 text-text-secondary">
                                    {item}
                                  </span>
                                </div>
                              ))}
                          </div>
                        )}
                    </PremiumCard>
                  </motion.button>
                );
              })}
            </div>

            <div className="mt-20 flex flex-col gap-6 rounded-[32px] border border-border bg-background p-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-bold text-text-primary">
                  {selectedService
                    ? selectedService.title
                    : "No Service Selected"}
                </h3>

                <p className="mt-2 text-text-secondary">
                  {selectedService
                    ? "Continue to provide your organisation details."
                    : "Please select a consulting service to continue."}
                </p>
              </div>

              <PrimaryButton
                disabled={!selectedService}
                onClick={handleContinue}
                icon={<ArrowRight size={18} />}
              >
                Continue
              </PrimaryButton>
            </div>
          </>
        )}
      </div>
    </Section>
  );
}