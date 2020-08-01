$(function () {
    const h6 = function (val) {
        return `<h6 class="card-value">${val}</h6>`
    }
    const setting = function (URL) {
        return {
            url: URL,
            method: 'GET'
        };
    };
    const cumulativeURL = "http://localhost:3000/api/cumulative";
    const allURL = "http://localhost:3000/api/all";

    // Fetch cumulative data
    $.ajax(setting(cumulativeURL)).done(data => {
        const obj = Object.entries(data[0]);
        $('section .centered').remove();

        $.each($('.card-info .card-body'), function (i, val) {
            $(this).find('h5').removeClass('m-0');
            $(this).find('h5').addClass('mb-1');
            $(this).append(h6(obj[i + 1][1])).fadeIn();
        })
    })

    // Fetch all indonesian data
    const t = $('table').DataTable({
        "dom": `<'row mb-3'
            <'col-lg-6 col-md-6 col-sm-12 mb-3 mb-lg-0'l>
            <'col-lg-6 col-md-6 col-sm-12 text-right text-sm-left'f>
        >
        <'row mb-2'
            <'col-12'<'table-responsive' t>>
        >
        <'row mb-3'
            <'col-lg-6 col-md-6 col-sm-12 mb-3 mb-lg-0 text-right text-sm-left'i>
            <'col-lg-6 col-md-6 col-sm-12 text-right text-sm-left'p>
        >`,
        "ajax": allURL,
        "columns": [{
                "data": null
            },
            {
                "data": "attributes.Provinsi"
            },
            {
                "data": "attributes.Kasus_Posi"
            },
            {
                "data": "attributes.Kasus_Semb"
            },
            {
                "data": "attributes.Kasus_Meni"
            },
        ],
        "columnDefs": [{
            "searchable": false,
            "orderable": false,
            "width": "5%",
            "className": "text-center",
            "targets": 0
        }, {
            "targets": 1,
            "width": "900px"
        }, {
            "targets": 2,
            "width": "15%"
        }, {

            "targets": 3,
            "width": "15%"
        }, {

            "targets": 4,
            "width": "15%"
        }, ],
        "order": [
            [1, 'asc']
        ],
        "lengthMenu": [
            [10, 25, 50, -1],
            [10, 25, 50, "All"]
        ]
    });

    t.on('order.dt search.dt', function () {
        t.column(0, {
            search: 'applied',
            order: 'applied'
        }).nodes().each(function (cell, i) {
            cell.innerHTML = i + 1;
        });
    })

    $(document).ready(function () {
        $('.modal').modal('show');
        $(window).scroll(function (event) {
            const scroll = $(window).scrollTop();
            if (scroll > 10) $('nav').addClass('scrolled');
            else $('nav').removeClass('scrolled');
        });
    })
})