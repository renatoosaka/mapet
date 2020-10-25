import Pet from '../models/Pet'
import imagesView from './images'
import { lightFormat } from 'date-fns'

export default {
  render (pet: Pet) {
    return {
      latitude: pet.latitude,
      longitude: pet.longitude,
      pet_name: pet.pet_name,
      pet_type: pet.pet_type === 'dog' ? 'Cachorro' : pet.pet_type === 'cat' ? 'Cato' : pet.pet_type,
      detail: pet.detail,
      when: pet.when ? lightFormat(pet.when, 'dd/MM/yyyy') : null,
      contact_name: pet.contact_name,
      phone_number: pet.phone_number,
      reward: pet.reward ? Number(pet.reward.toString().replace('.', '').replace(',', '.')).toLocaleString('pt-br', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 }) : 0.00,
      founded: pet.founded,
      action_type: pet.action_type === 'L' ? 'Perdi' : 'Encontrei',
      images: imagesView.renderMany(pet.images)
    }
  },

  renderMany (pets: Pet[]) {
    return pets.map(pet => this.render(pet))
  }
}
