"use client";

import { useState } from "react";
import {
  Form,
  Input,
  Select,
  Button,
  message,
} from "antd";
import { motion } from "motion/react";
import {
  Send,
  User,
  Mail,
  Phone,
  Building2,
} from "lucide-react";

import Section from "@/components/layout/Section";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import PremiumSectionHeading from "@/components/ui/PremiumSectionHeading";
import requestApi from "@/api/requestApi";
import serviceApi from "@/api/serviceApi";

const { TextArea } = Input;

const services = [
  "Business Solutions",
  "Administrative Services",
  "Operational Improvement",
  "Compliance Support",
  "Healthcare Advisory & Support",
];

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    try {
      setLoading(true);

      const serviceResponse = await serviceApi.getServices({ limit: 100 });
      const availableServices = Array.isArray(serviceResponse?.data)
        ? serviceResponse.data
        : Array.isArray(serviceResponse)
          ? serviceResponse
          : [];
      const selectedService = availableServices.find(
        (service) => service.title === values.service,
      );

      if (!selectedService?._id) {
        throw new Error(
          "That service is temporarily unavailable. Please email us directly.",
        );
      }

      await requestApi.createRequest({
        service: selectedService._id,
        fullName: values.name.trim(),
        email: values.email.trim(),
        phone: values.phone?.trim() || "",
        company: values.company?.trim() || "",
        project: values.message.trim(),
        message: values.message.trim(),
      });

      message.success(
        "Thank you. Your enquiry has been received and we will respond within one business day.",
      );
    } catch (submissionError) {
      message.error(
        submissionError?.response?.data?.message ||
          submissionError?.message ||
          "We could not send your enquiry. Please email info@habglobalmanagement.co.uk.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section
      id="contact-form"
      className="relative scroll-mt-20 overflow-hidden py-28 lg:py-36"
    >

      <BackgroundGlow />

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="relative z-10 grid gap-20 lg:grid-cols-[420px_1fr]">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <PremiumSectionHeading
            label="Send A Message"
            title="Let's Discuss Your Goals"
            description="Complete the form and tell us about your organisation. We'll review your enquiry and respond as soon as possible."
          />

          <div className="mt-12 space-y-8">

            <div>

              <h3 className="font-bold text-text-primary">
                Why contact us?
              </h3>

              <p className="mt-3 leading-8 text-text-secondary">
                Whether you're looking for strategic guidance,
                operational improvement or administrative
                support, we'll help you identify the right
                solution for your organisation.
              </p>

            </div>

            <div className="rounded-3xl border border-border bg-background p-6">

              <p className="font-semibold text-secondary">
                Average Response Time
              </p>

              <h2 className="mt-3 text-3xl font-black text-text-primary">
                Within 24 Hours
              </h2>

            </div>

          </div>

        </motion.div>

        {/* FORM */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-[36px] border border-border bg-background p-8 shadow-xl md:p-12"
        >

          <Form
            layout="vertical"
            onFinish={onFinish}
          >

            <div className="grid gap-6 md:grid-cols-2">

              <Form.Item
                label="Full Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Enter your full name",
                  },
                ]}
              >
                <Input
                  size="large"
                  prefix={<User size={18} />}
                  placeholder="John Doe"
                />
              </Form.Item>

              <Form.Item
                label="Company"
                name="company"
              >
                <Input
                  size="large"
                  prefix={<Building2 size={18} />}
                  placeholder="Company Name"
                />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                  },
                ]}
              >
                <Input
                  size="large"
                  prefix={<Mail size={18} />}
                  placeholder="email@example.com"
                />
              </Form.Item>

              <Form.Item
                label="Phone"
                name="phone"
              >
                <Input
                  size="large"
                  prefix={<Phone size={18} />}
                  placeholder="+234..."
                />
              </Form.Item>

            </div>

            <Form.Item
              label="Service"
              name="service"
              rules={[
                {
                  required: true,
                  message: "Select the service you are interested in",
                },
              ]}
            >
              <Select
                size="large"
                placeholder="Select a service"
                options={services.map((item) => ({
                  label: item,
                  value: item,
                }))}
              />
            </Form.Item>

            <Form.Item
              label="Message"
              name="message"
              rules={[
                {
                  required: true,
                  message: "Tell us briefly how we can help",
                },
              ]}
            >
              <TextArea
                rows={7}
                placeholder="Tell us about your organisation and how we can help..."
              />
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              size="large"
              icon={<Send size={18} />}
              className="h-14 rounded-full bg-secondary px-10 font-semibold text-primary hover:!bg-secondary"
            >
              Send Message
            </Button>

            <p className="mt-5 text-sm leading-6 text-text-secondary">
              Prefer email? Write to{" "}
              <a
                className="font-semibold text-secondary hover:underline"
                href="mailto:info@habglobalmanagement.co.uk"
              >
                info@habglobalmanagement.co.uk
              </a>
              .
            </p>

          </Form>

        </motion.div>

      </div>

    </Section>
  );
}
