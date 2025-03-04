<template>
    <v-sheet>
        <v-text-field
            :label="'Search'"
            color="secondary"
            @keyup.enter="search"
            hide-details
        outlined
        dense
        >
        <template v-slot:append>
            <v-btn
                    class="mt-n2"
                    elevation="1"
                    fab icon
                    small
                    @click="search"
                >
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
        </template>
            <template v-slot:append-outer>
             
                <v-btn
                    class="mt-n2 ml-2"
                    elevation="1"
                    fab
                    small
                    dark
                    @click="add"
                    color="blue"
                >
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </template>
        </v-text-field>
    </v-sheet>
</template>

<script>
export default {
    data() {
        return {
         
        };
    },
    methods: {

        search() {
            // Your search method logic
        },
        add() {
            // Your add method logic
        }
    }
}
</script>
