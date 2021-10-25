const search = document.querySelector(".links__search");
const searchForm = document.querySelector(".links__searchForm");





function handleSearch(event){
    event.preventDefault();
    const link = `https://google.com/search?q=${search.value}`;
    search.value = "";
    window.open(link);
}

searchForm.addEventListener("submit",handleSearch);