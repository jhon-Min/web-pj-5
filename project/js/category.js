let categories = ['Phone', 'Computer', 'Camera'];
let subCategories = [
    { name: 'Iphone', cate_id: 0 },
    { name: 'Samsaung', cate_id: 0 },
    { name: 'Xiomai', cate_id: 0 },
    { name: 'Dell', cate_id: 1 },
    { name: 'HP', cate_id: 1 },
    { name: 'Cannon', cate_id: 2 },
    { name: 'Sonny', cate_id: 2 },
]

categories.map((category, index) =>
    $("#cate").append(`<option value="${index}">${category}</option>`) 
);

subCategories.map((subCat, index) => 
    $("#subCat").append(`<option value="${index}" data-cate="${subCat.cate_id}">${subCat.name}</option>`)
);

$("#cate").on("change", function () {
    let selectId = $(this).val();
    $("#subCat option").hide();
    $(`[data-cate=${selectId}]`).show();
});