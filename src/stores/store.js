import { defineStore } from "pinia";
export const stockStore = defineStore({
    id: 'stockCourant',
    state: () => ({
        stock: 0
    }),
    actions: {
        vente() {
            this.stock --;
        },
        reappro() {
            this.stock += 10;
        }
    },
    getters: {
        stockBas: (state) => {
            if (state.stock < 10) return 'Attention - Le stock est trop bas'
            else return 'Le stock est correct';
        }
    }
})
