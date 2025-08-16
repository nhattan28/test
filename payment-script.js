document.addEventListener('DOMContentLoaded', () => {
    // Lấy các tham số từ URL
    const params = new URLSearchParams(window.location.search);

    const debtor = params.get('debtor');
    const amount = params.get('amount');
    const reason = params.get('reason');

    // Lấy các phần tử HTML để hiển thị thông tin
    const debtorInfo = document.getElementById('debtor-info');
    const amountInfo = document.getElementById('amount-info');
    const reasonInfo = document.getElementById('reason-info');

    // Kiểm tra nếu có đủ thông tin
    if (debtor && amount && reason) {
        // Hiển thị thông tin lên trang
        debtorInfo.textContent = debtor;
        
        // Định dạng số tiền
        const formattedAmount = new Intl.NumberFormat('vi-VN', { 
            style: 'currency', 
            currency: 'VND' 
        }).format(amount);
        
        amountInfo.textContent = formattedAmount;
        reasonInfo.textContent = reason;

    } else {
        // Nếu không có tham số, hiển thị thông báo lỗi
        document.getElementById('page-title').textContent = "Không tìm thấy yêu cầu thanh toán!";
        document.getElementById('payment-details').innerHTML = `<p>Đường link không hợp lệ hoặc đã bị lỗi.</p>`;
    }
});