function NotificationBadge({ count }) {
  return (
    <div>
      <p>Notifications {count > 0 && <span>({count})</span>}</p>
    </div>
  );
}