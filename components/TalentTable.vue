<template>
  <b-table
    :items="playerData"
    :fields="fields"
    bordered
    striped
    responsive="sm">
    <template v-slot:cell(thumbnail)="row">
      <img
        :src="row.item.image"
        alt="Player Thumbnail"
        style="width: 50px; height: 50px; border-radius: 50%" />
    </template>
    <template v-slot:cell(name)="row">
      <NuxtLink :to="`/talents/${row.item.id}`">{{ row.item.name }}</NuxtLink>
    </template>
  </b-table>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  playerData: Array,
})

const fields = [
  {
    key: 'thumbnail',
    label: 'Image',
    align: 'center',
    tdClass: 'align-middle',
  }, // Align center and vertically center thumbnail
  { key: 'name', label: 'Name', align: 'center', tdClass: 'align-middle' }, // Align center and vertically center name
  { key: 'age', label: 'Age', align: 'center', tdClass: 'align-middle' }, // Align center and vertically center age
  {
    key: 'position',
    label: 'Position',
    align: 'center',
    tdClass: 'align-middle',
  }, // Align center and vertically center position
  { key: 'height', label: 'Height', align: 'center', tdClass: 'align-middle' }, // Align center and vertically center height
  { key: 'weight', label: 'Weight', align: 'center', tdClass: 'align-middle' }, // Align center and vertically center weight
  { key: 'club', label: 'Club', align: 'center', tdClass: 'align-middle' }, // Align center and vertically center club
  { key: 'coach', label: 'Coach', align: 'center', tdClass: 'align-middle' }, // Align center and vertically center coach
  { key: 'foot', label: 'Foot', align: 'center', tdClass: 'align-middle' }, // Align center and vertically center foot
]
</script>
