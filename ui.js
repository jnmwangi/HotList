const categoryDialog = document.querySelector('#categoryDialog');
const categoryForm = categoryDialog.querySelector("form");
const addCategoryBtn = document.querySelector("#addCategoryBtn");
const categoriesListEl = document.querySelector("#categories");
const closeCategoryDialog = categoryDialog.querySelector('button[type="button"]');

console.log(categoriesListEl)

function categoryItem(category){
    return `<li class="category" id="${category.id}">${category.name}</li>`;
}


closeCategoryDialog.addEventListener("click", ()=>{
    categoryDialog.close();
    
    categoryDialog.style.display = "none";
});

addCategoryBtn.addEventListener("click", (evt)=>{
    console.log(evt);
    categoryDialog.showModal();
    categoryDialog.style.display = "inline-block";
});

categoryForm.addEventListener("submit", (evt)=>{
    evt.preventDefault();

    const categoryName = categoryForm.name.value;
    const banner = categoryForm.banner.value;
    const category = Category(categoryName, banner);

    categoriesListEl.innerHTML += categoryItem(category);
    categoryForm.reset();
    closeCategoryDialog.click();

});