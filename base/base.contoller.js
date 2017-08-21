function getItemlist(req, res, Model, listKey) {
    Model.find().sort('name').exec((error, itemList) => {
        if (error) {
            res.status(500).send(error);
        }

        res.json({
            [listKey]: itemList
        });
    });
}

function createItem(req, res, Model) {
    const modelToSave = new Model(req.body);

    modelToSave.save()
        .then((item) => res.status(200).send(item))
        .catch((error) => res.status(500).send(error));
}

function getItem(req, res, Model) {
    Model.findById(req.params.id)
        .then((item) => res.status(200).json(item))
        .catch((error) => res.status(500).send(error));
}

function updateItem(req, res, Model) {
    Model.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec()
        .then((item) => res.status(200).json(item))
        .catch((error) => res.status(500).send(error));
}

function deleteItem(req, res, Model) {
    Model.findOne({ _id: req.params.id }).exec((error, item) => {
        if (error) {
            res.status(500).send(error);
        }

        item.remove(() => {
            res.status(200).end();
        });
    });
}

module.exports = {
    getItemlist: getItemlist,
    createItem: createItem,
    getItem: getItem,
    updateItem: updateItem,
    deleteItem: deleteItem
};
