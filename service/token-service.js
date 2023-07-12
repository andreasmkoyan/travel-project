const jwt = require('jsonwebtoken');
const { User } = require('../model/index');
require('dotenv').config()

class TokenService {
    static generateToken(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
            expiresIn: '1h'
        })
        return {
            accessToken
        }
    }
    static validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
            return userData
        } catch (e) {
            return null
        }
    }
    static async saveToken(id, accessToken) {
        const tokenData = await User.findOne({
            where: {
                id: id
            }
        })
        if (tokenData) {
            await User.update({
                accessToken: accessToken
            }, {
                where: {
                    id: id
                }
            })
        }
    }
    static async removeToken(accessToken) {
        const tokenData = await User.update({
            accessToken: null
        }, {
            where: {
                accessToken
            }
        })
        return tokenData
    }
    static async findToken(accessToken) {
        const tokenData = await User.findOne({ where: { accessToken: accessToken } })
        return tokenData
    }
}
module.exports = TokenService