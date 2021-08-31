<template>
  <v-dialog
    :value="dialog"
    @input="$emit('input', $event)"
    max-width="600px"
    persistent
  >
    <v-card>
      <v-card-title>
          Edit Headline
      </v-card-title>
      <v-card-text>
        <v-col
          cols="12"
          sm="12"
          md="12"
        >
          <v-text-field
            label="Headline"
            outlined
            :value="editedId"
          ></v-text-field>
        </v-col>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="update">
          Update
        </v-btn>
        <v-btn @click="close">
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
    name: "EditHeadline",
    props: {
    editedId: String,
    dialog: Boolean,
    },
  methods: {
    update() {
      this.$emit("updateheadline");
    },
    close() {
      this.$emit("close-dialog");
    },
  },
};
</script>