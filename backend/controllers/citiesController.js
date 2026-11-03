const City = require('../models/City')
const Itinerary = require('../models/Itinerary') // 1. Importamos el modelo de Itinerarios

const citiesController = {
    addCity: async (req, res) => {
        try {
            const { cityName, url, cityCountryName } = req.body
            
            // Creamos y guardamos la nueva ciudad
            const agregarCity = new City({ 
                cityName, 
                url, 
                cityCountryName, 
                cityCountItineraries: 0 // Arranca en 0 porque recién se crea
            })
            
            await agregarCity.save() 
            
            return res.json({ 
                success: true, 
                respuesta: agregarCity,
                message: `Ciudad ${agregarCity.cityName} creada con éxito`
            })
        } catch (error) {
            return res.status(500).json({ success: false, respuesta: error.message })
        }
    },
    
    allCities: async (req, res) => {
        try {
            // 2. Buscamos todas las ciudades
            const cities = await City.find()

            // 3. Contamos los itinerarios de cada ciudad dinámicamente en tiempo real
            const citiesWithCount = await Promise.all(
                cities.map(async (city) => {
                    const count = await Itinerary.countDocuments({ cityId: city._id })
                    
                    return {
                        ...city.toObject(),
                        cityCountItineraries: count // Inyectamos el número real de itinerarios
                    }
                })
            )

            return res.json({ success: true, respuesta: citiesWithCount })
        } catch (error) {
            return res.status(500).json({ success: false, respuesta: error.message })
        }
     },

     editCity: async (req, res) => {
        try {
            const id = req.params.id
            const { cityName, url, cityCountryName } = req.body
            
            const updatedCity = await City.findByIdAndUpdate(
                id, 
                { cityName, url, cityCountryName },
                { new: true } // Para que devuelva el documento ya actualizado
            )

            return res.json({ success: true, respuesta: updatedCity, 
                message: `Ciudad ${updatedCity.cityName} actualizada con éxito` })
        } catch (error) {
            return res.status(500).json({ success: false, respuesta: error.message })
        }
     },

     deleteCity: async (req, res) => {
        try {
            console.log(req.params)
            const id = req.params.id

            await City.findByIdAndDelete(id)
            return res.json({ success: true, respuesta: "Ciudad eliminada con éxito" })
        } catch (error) {
            return res.status(500).json({ success: false, respuesta: error.message })
        }
     },

     oneCitie: async (req, res) => {
        try {
            const id = req.params.id
            const city = await City.findById(id)
            
            if (!city) {
                return res.status(404).json({ success: false, respuesta: "Ciudad no encontrada" })
            }

            // Opcional: Si quieres que al buscar una sola ciudad también traiga su conteo exacto
            const count = await Itinerary.countDocuments({ cityId: city._id })
            const cityResponse = {
                ...city.toObject(),
                cityCountItineraries: count
            }

            return res.json({ success: true, respuesta: cityResponse })
        } catch (error) {
            return res.status(500).json({ success: false, respuesta: error.message })
        }
     }
}

module.exports = citiesController