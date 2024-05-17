const StudentModel = require("./model/inventory")




const handleGetRequest = async(req, res)=>{
    return res.status(200).json({message: "Successful"})
}

const handleUserRequest = async(req, res)=>{

    const ProductName = await inventory.find()

    return res.status(200).json({message: "Product name", ProductName})
}


const handlePostRequest = async (req, res)=>{

    const { Product, Brand, Quality, Manufacturer} = req.body

    const NewItem = new inventory({ Product, Brand, Quality, Manufacturer })

    await NewItem.save()


    return res.status(200).json({ message: "item added successful", productDetail: NewItem
    })
}

function handleEditUserReq (req, res){ return res.status(200).json({ message: "wow! is working" })
}


module.exports = {
    handleGetRequest,
    handleUserRequest,
    handlePostRequest,
    handleEditUserReq
}