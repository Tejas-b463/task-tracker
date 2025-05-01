export const getCountries = async(req, res) => {
    try {
        const countries = [
            "India",
            "United States",
            "Canada",
            "United Kingdom",
            "Australia",
            "Germany",
            "France",
            "Japan",
            "China"
        ];
        res.status(200).json(countries);
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch countries" });
    }
};