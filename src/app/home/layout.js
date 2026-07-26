export const metadata = {
  alternates: {
    canonical: "/",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function HomeAliasLayout({ children }) {
  return children;
}
