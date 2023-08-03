import { useNotificationsMutation } from 'api/notifications/notifications';
import { useEffect } from 'react';

export default function Notifications() {
  const [fetchNotifications, { data, isLoading, error }] = useNotificationsMutation();

  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading user notifications</div>;
  }

  if (!data?.[0]) {
    return <div>No notifications</div>;
  }

  const { id, title, description, created } = data[0];

  return (
    <div>
      {id} - {title} - {description} - {created}
    </div>
  );
}
