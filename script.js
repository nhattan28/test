document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('payment-request-form');
    const resultDiv = document.getElementById('result');
    const shareLinkP = document.getElementById('share-link');
    const copyButton = document.getElementById('copy-button');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Lấy dữ liệu từ form
        const debtorName = document.getElementById('debtor-name').value;
        const amount = document.getElementById('amount').value;
        const reason = document.getElementById('reason').value;

        // Tạo đối tượng URLSearchParams
        const params = new URLSearchParams();
        params.append('debtor', debtorName);
        params.append('amount', amount);
        params.append('reason', reason);

        // Tạo đường link yêu cầu thanh toán
        // Sử dụng window.location.origin để có được domain hiện tại
        const link = `${window.location.origin}/payment-page.html?${params.toString()}`;
        
        // Hiển thị đường link cho người dùng
        shareLinkP.textContent = link;
        resultDiv.classList.remove('hidden');

        // Reset form
        form.reset();
    });

    copyButton.addEventListener('click', () => {
        const linkText = shareLinkP.textContent;
        navigator.clipboard.writeText(linkText).then(() => {
            // Cập nhật trạng thái nút sau khi sao chép
            const originalText = copyButton.textContent;
            copyButton.textContent = 'Đã sao chép!';
            setTimeout(() => {
                copyButton.textContent = originalText;
            }, 2000);
        }).catch(err => {
            console.error('Không thể sao chép: ', err);
            alert('Có lỗi xảy ra khi sao chép đường link.');
        });
    });
});