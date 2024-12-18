const { default: mongoose } = require("mongoose");

const PaymentSchame = new mongoose.Schema({
    id_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        require: true
    },
    full_name:{
        type:String,
        require:true
    },
    number_phone:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    id_cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "cart",
    }],
    id_product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",

    },
    method_payment:{
        type:String,
        enum: ['VNPay', 'COD'],
        default: 'COD'
        
    },
    data_payment: {
        shipping_fee: { type: Number, default: 0 }, 
        discount: { type: Number, default: 0 },     
        taxes: { type: Number, default: 0 },
        total: { type: Number, required: true },
        shipping_date: { type: Date, default:Date.now }, 
        delivery_date: { type: Date,default:Date.now },
        product_condition:{type:String},
        shipping_mode:{type:String, require:true},
        note:{type:String},

    },
    shop_details: [{
        id_shop: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true
        },
        service_fee: {
            type: Number,
            required: true
        },
        shipping_fee: {
            type: Number,
            required: true
        },
        confirmationStatus: {  
            type: String,
            enum: ['Chờ duyệt', 'Đang giặt', 'Đang giao', 'Hoàn thành', 'Đã hủy'],
            default: 'Chờ duyệt'
        }
    }],
    mount_money:{
        type:Number,
        require:true
    },
    status:{
        type:String,
        enum: ['Pending', 'Paid', 'Failed',"COD"],
        default: 'Pending'
    },
    
},{timestamps: true})

const PaymentModel = mongoose.model('payment', PaymentSchame);
module.exports = PaymentModel;