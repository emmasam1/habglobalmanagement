const styles = {
  Pending: "bg-warning/10 text-warning",
  Processing: "bg-info/10 text-info",
  Completed: "bg-success/10 text-success",
  Cancelled: "bg-error/10 text-error",
  Paid: "bg-success/10 text-success",
  Sent: "bg-info/10 text-info",
  Failed: "bg-error/10 text-error",
};

export default function AdminStatusBadge({
  status,
}) {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
        styles[status] ||
        "bg-surface-secondary text-text-secondary"
      }`}
    >
      {status || "Unknown"}
    </span>
  );
}
