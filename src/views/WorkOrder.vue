<template>
    <v-row>
        <v-col cols="12">
            <TableWorkOrder></TableWorkOrder>
            <FormWorkOrder></FormWorkOrder>
        </v-col>
    </v-row>
</template>
<script>
import FormWorkOrder from '../components/FormWorkOrder.vue';
import TableWorkOrder from '../components/TableWorkOrder.vue';

export default {
    components: {
        TableWorkOrder: TableWorkOrder,FormWorkOrder
        },
    }
</script>