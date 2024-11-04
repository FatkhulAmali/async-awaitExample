//simulation of cooking in the kitchen
function cookFood(order) {
    return new Promise(function(resolve, reject) {
        console.log(`start cooking: ${order}...`)
        setTimeout(() => {resolve(`Order ${order} ready!!`)}, 3000)// cooking time is 3 second
    })
}

//simulation of deliver food to customer
function deliverFood(order) {
    return new Promise(function(resolve, reject) {
        console.log(`deliver ${order} to customer...`)
        setTimeout(() => {resolve(`Order ${order} has been deliver to customer!!`)}, 1000)// deliver to customer time is 1 second
    })
}

//main function use async await
async function restaurantFLowOrder(order) {
    try{
        console.log("Receive Order From Customer...")
        //cooking food (asynchronous, doesn't block another task)
        const cookedFood = await cookFood(order)
        console.log(cookedFood)

        //deliver food (asynchronous, doesn't block another task)
        const deliveredFood = await deliverFood(order)
        console.log(deliveredFood)

        console.log("process finish")
       
    } catch (error) {
    console.log(`there is mistake : ${error}`)
    }
}

restaurantFLowOrder("Fried Rice")
restaurantFLowOrder("Noodle")