 // จัดการการคลิกเพื่อเลือก
 document.querySelectorAll('.box_size a').forEach(function(item) {
    item.addEventListener('click', function() {
        // ลบคลาส 'selected' ออกจากทุกองค์ประกอบ
        document.querySelectorAll('.box_size a').forEach(function(el) {
            el.classList.remove('selected');
        });
        // เพิ่มคลาส 'selected' ให้กับองค์ประกอบที่ถูกคลิก
        item.classList.add('selected');
    });
});

// เพื่อแสดงข้อความแจ้งเตือน "สั่งของเสร็จสิ้นแล้ว" เมื่อกดปุ่มชำระเงิน
function completeOrder() {
    alert('สั่งของเสร็จสิ้นแล้ว');
}