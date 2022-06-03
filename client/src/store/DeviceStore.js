import {makeAutoObservable} from "mobx"

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1,name: "mobile"},
            {id: 2,name: "Tablet"}
        ]
        this._brands = [
            {id: 1,name: "Apple"},
            {id: 2, name: "Nokia"},
            {id: 3, name: "Samsung"}
        ]
        this._devices = [
            {id:5,name:"IpadPro",price:12000,rating:0,img:"6414db08-6279-4a9b-99fc-88a37ff06dd3.jpg",typeId:2,brandId:1},
            {id:7,name:"S22 ultra",price:90000,rating:0,img:"0c15d6b7-8ff4-494a-935a-9c4613673714.jpg",typeId:1,brandId:3}
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}
