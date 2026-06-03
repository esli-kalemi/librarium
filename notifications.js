const overdueNotifications = [
    {
        title: "The Great Gatsby",
        detail: "Overdue by 5 days",
        client: "Jordan Smith",
        status: "Overdue",
    },
    {
        title: "A Brief History of Time",
        detail: "Overdue by 2 days",
        client: "Maya Patel",
        status: "Overdue",
    }
];

const lowStockNotifications = [
    {
        title: "1984",
        detail: "Only 2 copies left",
        status: "Low stock",
    },
    {
        title: "Atomic Habits",
        detail: "Only 4 copies left",
        status: "Low stock",
    }
];

function renderNotifications(listId, notifications, statusClass) {
    const container = document.getElementById(listId);
    if (!container) return;

    if (notifications.length === 0) {
        container.innerHTML = '<p style="color:#7b7b7b; font-size:0.9rem;">No notifications at the moment.</p>';
        return;
    }

    container.innerHTML = notifications.map(notification => {
        const statusLabel = notification.status === 'Overdue'
            ? 'status-overdue'
            : 'status-lowstock';

        return `
            <div class="notification-item">
                <div>
                    <strong>${notification.title}</strong>
                    <div>${notification.detail}</div>
                    ${notification.client ? `<div style="margin-top:8px; color:#555; font-size:0.88rem;">Member: ${notification.client}</div>` : ''}
                </div>
                <span class="notification-status ${statusLabel}">${notification.status}</span>
            </div>
        `;
    }).join('');
}

function updateSummary() {
    const overdueCount = document.getElementById('overdueCount');
    const lowStockCount = document.getElementById('lowStockCount');

    if (overdueCount) overdueCount.textContent = overdueNotifications.length;
    if (lowStockCount) lowStockCount.textContent = lowStockNotifications.length;
}

renderNotifications('overdueList', overdueNotifications, 'status-overdue');
renderNotifications('lowStockList', lowStockNotifications, 'status-lowstock');
updateSummary();
