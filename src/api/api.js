
const api = {
    sendSettings(data) {
        return Promise.resolve({
                status: 200,
                data: data
            })
    }
}
export default api