<script setup lang="ts">
import type { productSchema } from '@serializers';
import ProductItem from '../components/ProductItem.vue';
import Loader from './Loader.vue';

defineProps<{
  products: productSchema[];
  isLoading: boolean;
  isError: Error | null;
}>();

defineEmits<{
  'refetch-products': [];
}>();
</script>

<template>
  <div class="px-10 mx-auto max-w-full xl:max-w-[1240px] py-8 sm:py-10 w-full">
    <p v-if="isLoading">
      <Loader class="my-0 mx-auto" />
    </p>
    <div v-else-if="isError" class="text-center">
      <p class="mb-2">
        Products loading failed...
      </p>
      <a href="" class="text-turquose underline hover:no-underline" @click="$emit('refetch-products')">Load again</a>
    </div>
    <div v-else class="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4">
      <div v-for="(product, index) in products" :key="product.id">
        <ProductItem :product="product" :is-first="index == 0" />
      </div>
    </div>
  </div>
</template>
