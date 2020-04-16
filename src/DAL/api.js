
const api = {

    loadForm(data) {
        return new Promise((resolve) => {

            resolve({
                status: 200,
                data: data
            })
        })
    }
}
export default api