<template>
  <div id="mytable">
    <vue-good-table
      :columns="columns"
      :rows="rows"
      :pagination-options="{ enabled: true, perPage: 50 }">
    </vue-good-table>
  </div>
</template>

<script>
import nodes_obj from '@/assets/nodes.json'

// vue-good-table
import { VueGoodTable } from 'vue-good-table';

// import the styles
import "vue-good-table/dist/vue-good-table.css";

export default {
  name: 'my-component',
  components: {
    VueGoodTable,
  },
  data() {
    return {
      columns: [
        {
          label: '地域',
          field: 'area',
          filterOptions: {
            enabled: true, // enable filter for this column
            placeholder: '地域で検索', // placeholder for filter input
            filterDropdownItems: ['センタ', '本社', '北海道地区', '東北地区', '新潟地区', '関東地区', '東海地区', '金沢地区', '関西地区', '広島地区', '九州地区'],
          },
        },
        {
          label: '拠点',
          field: 'site',
        },
        {
          label: '拠点詳細',
          field: 'site_detail',
        },
        {
          label: '親番',
          field: 'parent',
          type: 'number',
        },
        {
          label: '子番',
          field: 'child',
          type: 'number',
        },
        {
          label: '機器',
          field: 'node_id',
          filterOptions: {
            enabled: true,
            placeholder: '機器名で検索',
          },
        },
        {
          label: 'アドレス',
          field: 'address',
          type: 'text',
          filterOptions: {
            enabled: true,
            placeholder: 'アドレスで検索',
            filterFn: function(data, filterString) {
              if (data === null) {
                return false;
              }
              if (data.indexOf(filterString) === -1) {
                return false;
              }
              return true;
            },
          },
        },
        {
          label: '機種',
          field: 'device_name',
        },
      ],
      rows: nodes_obj.nodes,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#mytable {
  margin-top: 10pt;
}

</style>
