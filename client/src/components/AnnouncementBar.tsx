export default function AnnouncementBar() {
  return (
    <div className="bg-background border-b border-border">
      <div className="py-2 text-center">
        <p className="text-xs font-medium uppercase tracking-wide" data-testid="text-announcement">
          FREE SHIPPING OVER €70
        </p>
      </div>
    </div>
  );
}
