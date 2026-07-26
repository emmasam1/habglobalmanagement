export default function manifest() {
  return {
    name: "HAB Global Management",
    short_name: "HAB Global",
    description:
      "Business and management consultancy services from HAB Global Management Ltd.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0b1739",
    icons: [
      {
        src: "/hab_logo_1.png",
        sizes: "745x656",
        type: "image/png",
      },
    ],
  };
}
