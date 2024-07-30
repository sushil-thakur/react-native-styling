import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElavatedCards from './components/ElavatedCards'
import FancyCards from './components/FancyCards'
import ActionCards from './components/ActionCards'
import ContactList from './components/ContactList'

const AppPro = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <FlatCards></FlatCards>
      <ElavatedCards/>
      <FancyCards/>
      <ActionCards/>
      <ContactList/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AppPro