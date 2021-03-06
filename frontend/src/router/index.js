import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../Pages/Accueil.vue';
import Signup from '../Pages/Signup.vue';
import Message from '../Pages/Message.vue';
import Profile from '../Pages/Profile.vue';
import CreationMessage from '../Pages/CreationMessage.vue';
import ListeUtilisateur from '../Pages/ListeUtilisateur.vue';
import ListeMessages from '../Pages/ListeMessages.vue';
import ListeCommentaires from '../Pages/ListeCommentaires.vue';
import modifMessage from '../Pages/modifMessage.vue';


const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/Message',
    name: 'Message',
    component: Message
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/CreationMessage',
    name: 'CreationMessage',
    component: CreationMessage
  },
  {
    path: '/ListeUtilisateur',
    name: 'ListeUtilisateur',
    component: ListeUtilisateur
  },
  {
    path: '/ListeCommentaires',
    name: 'ListeCommentaires',
    component: ListeCommentaires
  },
  {
    path: '/ListeMessages',
    name: 'ListeMessages',
    component: ListeMessages
  },
  {
    path: '/modifMessage',
    name: 'modifMessage',
    component: modifMessage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
