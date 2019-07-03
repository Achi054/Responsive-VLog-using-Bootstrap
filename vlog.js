$(function () {
    $('#vlog-tab a[href="#ordering"]').on('click', function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
    $('#vlog-tab a[href="#self-report"]').on('click', function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
    $('#vlog-tab a[href="#results"]').on('click', function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    /* Date format */
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const currentDate = new Date();
    $('.publisher').text('Vijay Sharma, ' + monthNames[currentDate.getMonth()] + " " + currentDate.getDate() + ", " + currentDate.getFullYear());
});