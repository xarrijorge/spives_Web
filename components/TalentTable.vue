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
      <b-link :to="`/talents/${row.item.id}`">{{ row.item.name }}</b-link>
    </template>
  </b-table>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  playerData: Array,
})

const fields = [
  { key: 'thumbnail', label: 'Thumbnail' },
  { key: 'name', label: 'Name' },
  { key: 'age', label: 'Age' },
  { key: 'position', label: 'Position' },
  { key: 'height', label: 'Height' },
  { key: 'weight', label: 'Weight' },
  { key: 'club', label: 'Club' },
  { key: 'coach', label: 'Coach' },
  { key: 'foot', label: 'Foot' },
]
</script>
