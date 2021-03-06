const BaseController = require('../base/base.contoller');
const GpuModel = require('./gpu.model');

function getGpuList(req, res) {
    GpuModel.find('rig rigPosition').exec((error, gpuList) => {
        if (error) {
            res.status(500).send(error);
        }

        res.json({ gpuList });
    });
}

function createGpu(req, res) {
    return BaseController.createItem(req, res, GpuModel);
}

function getGpu(req, res) {
    return BaseController.getItem(req, res, GpuModel);
}

function updateGpu(req, res) {
    return BaseController.updateItem(req, res, GpuModel);
}

function deleteGpu(req, res) {
    return BaseController.deleteItem(req, res, GpuModel);
}

module.exports = {
    getGpuList: getGpuList,
    createGpu: createGpu,
    getGpu: getGpu,
    updateGpu: updateGpu,
    deleteGpu: deleteGpu
};
