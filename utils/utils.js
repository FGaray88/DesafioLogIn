const moment = require("moment");

const formatMessage = (id, username, text) => {
    return {
        id,
        username,
        text,
        created_at: moment().format("h:mm a")
    }
}

module.exports = {
    formatMessage
}