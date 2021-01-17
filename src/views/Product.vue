<template>
    <div class="product">
        <product></product>
        <feature></feature>
        <feature2></feature2>
        <contact></contact>
    </div>
</template>
<script>
import product from '@/components/product';
import feature from '@/components/feature';
import feature2 from '@/components/feature2';
import contact from '@/components/contact';
export default {
    name:'Product',
    components:{
        product,
        feature,
        feature2,
        contact,
    }
}
</script>
