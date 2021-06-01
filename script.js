$("button").click(function() {
    let drinkName = $(".drink-name").val();
    let drinkCost = $(".drink-cost").val();
    let drinksNum = $(".drinks-per-week").val();
    let drinkTotalCost = drinksNum * drinkCost * 520;
    $(".predictions").html(`<p>In 10 years, you will have spent $${drinkTotalCost} buying ${drinkName}`);
});