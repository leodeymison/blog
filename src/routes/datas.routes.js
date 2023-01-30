const express = require("express");
const router = express.Router();

router.get("/categorys", (req, res) => {
    const Data = [
        {
            _id: 1,
            name: "Big data",
            body: [
                {
                    _id: 1,
                    name: "Regressão linear",
                    list: [
                        {
                            _id: 1,
                            name: "Regressão linear simples"
                        }
                    ]
                }
            ]
        },
        {
            _id: 2,
            name: "Machine learning",
            body: [
                {
                    _id: 2,
                    name: "Rede neural",
                    list: [
                        {
                            _id: 2,
                            name: "Rede neural convulsional"
                        }
                    ]
                }
            ]
        }
    ]
    res.status(200).json(Data)
})

module.exports = router;
