"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  ArrowRight,
} from "lucide-react";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

// Latitude and Longitude for Sovereign Centre, Weston-super-Mare
const position = [51.3486, -2.9774];

const icon = new L.DivIcon({
  html: `
    <div
      style="
        width:18px;
        height:18px;
        background:#C8A646;
        border-radius:50%;
        border:3px solid white;
        box-shadow:0 4px 12px rgba(0,0,0,.2);
      "
    ></div>
  `,
  className: "",
});

export default function ContactMap() {
  return (
    <section className="py-20">
      <div className="container max-w-6xl">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="rounded-full bg-secondary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[.25em] text-secondary">
            Office Location
          </span>
          <h2 className="mt-4 text-3xl font-bold">
            Visit Our Office
          </h2>
          <p className="mt-3 text-base text-text-secondary">
            Whether you prefer meeting in person or remotely, we're here to help.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-12 items-stretch">
          
          {/* MAP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl lg:col-span-7 shadow-lg min-h-[420px]"
          >
            <MapContainer
              center={position}
              zoom={16}
              scrollWheelZoom={false}
              className="h-full w-full min-h-[420px]"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position} icon={icon} />
            </MapContainer>
          </motion.div>

          {/* CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-border bg-background p-8 shadow-lg lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold">
                Office Information
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                We'd be delighted to discuss your business needs.
              </p>

              <div className="mt-6 space-y-4">
                <InfoRow
                  icon={<MapPin size={18} />}
                  title="Office Address"
                  text="Unit 24–25, The Sovereign Centre High Street Weston-super-Mare BS23 1HL"
                />
                <InfoRow
                  icon={<Phone size={18} />}
                  title="Phone"
                  text="+44 XXXX XXX XXX"
                />
                <InfoRow
                  icon={<Mail size={18} />}
                  title="Email"
                  text="info@habglobal.co.uk"
                />
                <InfoRow
                  icon={<Clock3 size={18} />}
                  title="Working Hours"
                  text="Monday - Friday | 9:00 AM - 5:00 PM"
                />
              </div>
            </div>

            <div className="mt-8 pt-2">
              <Link
                href="https://www.google.com/maps/search/?api=1&query=Unit+24-25+The+Sovereign+Centre+High+Street+Weston-super-Mare+BS23+1HL"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform duration-200 hover:-translate-y-0.5"
              >
                Get Directions
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.4 }}
                >
                  <ArrowRight size={16} />
                </motion.div>
              </Link>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon, title, text }) {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      className="flex gap-4 items-start"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary mt-0.5">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-semibold text-text-primary">
          {title}
        </h4>
        <p className="mt-0.5 text-xs leading-5 text-text-secondary">
          {text}
        </p>
      </div>
    </motion.div>
  );
}