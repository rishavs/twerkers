const sayHello = async () => {
    try {
        return {
            status: 200, 
            data: `Yo yo yo this is moneysing`,
        }
        xxx
    } catch (err) {
        console.error(err)
        return {
            status: 500, 
            data: `Yo yo somting wrong`,
        }
    }
}

export {sayHello}