// Will add API call implementation after setting up Azure Function
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('your-azure-function-url');
        const data = await response.json();
        document.getElementById('count').textContent = data.count;
    } catch (error) {
        console.error('Error fetching visitor count:', error);
    }
});