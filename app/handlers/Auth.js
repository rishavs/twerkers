const GoogleCallback = async (req) => {
    try {
        // const content = await req.json()
        return {
            status: 200, 
            data: 'Creating Todo: ' + JSON.stringify(content)
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

export {GoogleCallback}