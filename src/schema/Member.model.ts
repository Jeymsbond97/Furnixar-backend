import mongoose, {Schema} from "mongoose";
import { MemberStatus, MemberType } from "../libs/enums/member.enum";


// Scheme first & Code first;

const memberSchema = new  Schema({
    memberType : {
        type: String,
        enum: MemberType,
        default: MemberType.USER

    },

    memberStatus: {
        type: String,
        enum: MemberStatus,
        default: MemberStatus.ACTIVE
    },

    memberNick : {
        type: String,
        index: {unique: true, sparse: true},
        required: true
    },

    memberPhone : {
        type: String,
        index: {unique: true, sparse: true},
        required: true
    },

    memberPassword : {
        type: String,
        select: false,
        required: true
    },

    memberAddress: {
        type: String,
    },
    memberEmail: {
        type: String,
    },

    memberDescr: {
        type: String,
    },

    memberImage : {
        type: String,
    },

    memberPoints : {
        type : Number,
        default: 0,
    }
}, {timestamps: true} )    // timestamp -> vazifasi qachon createAt, qachon updateAt bo'lganini ko'rsatib beradi.

export default mongoose.model("Member", memberSchema);