const ManualInitTemplate = (args) => `
<div>
  <at-button id="init-btn" label="Initialize Table" type="primary" style="margin-bottom: 20px;"></at-button>
  <p id="status" style="margin-bottom: 20px; color: #666;">
    Table not initialized. Click the button to initialize.
  </p>
  <at-table 
    id="manual-table"
    page_size="${args.page_size ?? 10}" 
    disable_auto_init="true"
  />
</div>
<script>
(function() {
  const table = document.getElementById('manual-table');
  const initBtn = document.getElementById('init-btn');
  const status = document.getElementById('status');
  
  // Set up table data but don't initialize yet
  table.table_data = ${JSON.stringify(args.table_data, null, 4)};
  table.col_defs = ${JSON.stringify(args.col_defs, null, 4)};
  
  let isInitialized = false;
  
  initBtn.addEventListener('click', async function() {
    if (!isInitialized) {
      status.textContent = 'Initializing table...';
      initBtn.disabled = true;
      
      try {
        // Manual initialization using createGrid method
        const gridApi = await table.createGrid();
        
        status.textContent = 'Table initialized successfully! Grid API available.';
        status.style.color = '#28a745';
        initBtn.textContent = 'Table Initialized';
        isInitialized = true;
        
        console.log('Manual table initialization completed. Grid API:', gridApi);
      } catch (error) {
        status.textContent = 'Failed to initialize table: ' + error.message;
        status.style.color = '#dc3545';
        initBtn.disabled = false;
      }
    }
  });
})();
</script>
`;
const DelayedInitTemplate = (args) => `
<div>
  <p id="countdown" style="margin-bottom: 20px; color: #666; font-weight: bold;">
    Auto-initializing in <span id="seconds">5</span> seconds...
  </p>
  <at-table 
    id="delayed-table"
    page_size="${args.page_size ?? 10}" 
    disable_auto_init="true"
  />
</div>
<script>
(function() {
  const table = document.getElementById('delayed-table');
  const countdown = document.getElementById('countdown');
  const secondsSpan = document.getElementById('seconds');
  
  // Set up table data
  table.table_data = ${JSON.stringify(args.table_data, null, 4)};
  table.col_defs = ${JSON.stringify(args.col_defs, null, 4)};
  
  let timeLeft = 5;
  
  const timer = setInterval(async function() {
    timeLeft--;
    secondsSpan.textContent = timeLeft;
    
    if (timeLeft <= 0) {
      clearInterval(timer);
      countdown.textContent = 'Initializing table...';
      
      try {
        const gridApi = await table.createGrid();
        countdown.textContent = 'Table initialized! AG Grid is ready for use.';
        countdown.style.color = '#28a745';
        
        console.log('Delayed table initialization completed. Grid API:', gridApi);
      } catch (error) {
        countdown.textContent = 'Failed to initialize: ' + error.message;
        countdown.style.color = '#dc3545';
      }
    }
  }, 1000);
})();
</script>
`;
const ConditionalInitTemplate = (args) => `
<div>
  <div style="margin-bottom: 20px;">
    <label style="margin-right: 10px;">
      <input type="checkbox" id="enable-pagination" checked> Enable Pagination
    </label>
    <label style="margin-right: 10px;">
      <input type="checkbox" id="enable-sorting" checked> Enable Sorting
    </label>
    <label style="margin-right: 10px;">
      <input type="checkbox" id="custom-pagination"> Use Custom Pagination
    </label>
    <at-button id="apply-config" label="Apply Configuration & Initialize" type="primary"></at-button>
  </div>
  <p id="config-status" style="margin-bottom: 20px; color: #666;">
    Configure options above, then click "Apply Configuration" to initialize the table.
  </p>
  <at-table 
    id="conditional-table"
    page_size="${args.page_size ?? 10}" 
    disable_auto_init="true"
  />
</div>
<script>
(function() {
  const table = document.getElementById('conditional-table');
  const enablePagination = document.getElementById('enable-pagination');
  const enableSorting = document.getElementById('enable-sorting');
  const customPagination = document.getElementById('custom-pagination');
  const applyBtn = document.getElementById('apply-config');
  const status = document.getElementById('config-status');
  
  // Set up base table data
  table.table_data = ${JSON.stringify(args.table_data, null, 4)};
  table.col_defs = ${JSON.stringify(args.col_defs, null, 4)};
  
  let isInitialized = false;
  
  applyBtn.addEventListener('click', async function() {
    if (!isInitialized) {
      status.textContent = 'Applying configuration...';
      applyBtn.disabled = true;
      
      try {
        // Apply conditional configuration before initialization
        if (!enableSorting.checked) {
          table.use_custom_sorting = true;
        }
        
        if (customPagination.checked) {
          table.use_custom_pagination = true;
        }
        
        // Initialize table with applied configuration
        const gridApi = await table.createGrid();
        
        const features = [];
        if (enablePagination.checked && !customPagination.checked) features.push('built-in pagination');
        if (customPagination.checked) features.push('custom pagination');
        if (enableSorting.checked) features.push('sorting');
        
        status.textContent = \`Table initialized with: \${features.join(', ') || 'basic features only'}!\`;
        status.style.color = '#28a745';
        applyBtn.textContent = 'Configuration Applied';
        isInitialized = true;
        
        console.log('Conditional table initialization completed with features:', features);
        console.log('Grid API:', gridApi);
      } catch (error) {
        status.textContent = 'Failed to apply configuration: ' + error.message;
        status.style.color = '#dc3545';
        applyBtn.disabled = false;
      }
    }
  });
})();
</script>
`;
const ExternalGridApiTemplate = (args) => `
<div>
  <div style="margin-bottom: 20px;">
    <at-button id="create-external-grid" label="Create External Grid API" type="secondary" style="margin-right: 10px;"></at-button>
    <at-button id="attach-to-table" label="Attach to Table" type="primary" disabled></at-button>
  </div>
  <p id="external-status" style="margin-bottom: 20px; color: #666;">
    Click "Create External Grid API" to create a shared grid instance, then attach it to the table.
  </p>
  <div id="external-grid-container" style="margin-bottom: 20px; height: 0; overflow: hidden;"></div>
  <at-table 
    id="external-table"
    page_size="${args.page_size ?? 10}" 
    disable_auto_init="true"
  />
</div>
<script>
(function() {
  const table = document.getElementById('external-table');
  const createBtn = document.getElementById('create-external-grid');
  const attachBtn = document.getElementById('attach-to-table');
  const status = document.getElementById('external-status');
  
  // Set up table data
  table.table_data = ${JSON.stringify(args.table_data, null, 4)};
  table.col_defs = ${JSON.stringify(args.col_defs, null, 4)};
  
  let externalGridApi = null;
  let isAttached = false;
  
  createBtn.addEventListener('click', async function() {
    try {
      status.textContent = 'Creating external grid API...';
      createBtn.disabled = true;
      
      // Create an external grid API that can be shared
      // In a real scenario, this might be created by a parent component
      externalGridApi = await table.createGrid();
      
      status.textContent = 'External grid API created! Now you can attach it to the table.';
      status.style.color = '#6f42c1';
      attachBtn.disabled = false;
      
      console.log('External grid API created:', externalGridApi);
    } catch (error) {
      status.textContent = 'Failed to create external grid: ' + error.message;
      status.style.color = '#dc3545';
      createBtn.disabled = false;
    }
  });
  
  attachBtn.addEventListener('click', function() {
    if (externalGridApi && !isAttached) {
      try {
        status.textContent = 'Attaching external grid API to table...';
        
        // Set the external grid API on the table
        table.ag_grid = externalGridApi;
        
        status.textContent = 'External grid API successfully attached to table!';
        status.style.color = '#28a745';
        attachBtn.textContent = 'Grid Attached';
        attachBtn.disabled = true;
        isAttached = true;
        
        console.log('External grid API attached to table');
      } catch (error) {
        status.textContent = 'Failed to attach grid: ' + error.message;
        status.style.color = '#dc3545';
      }
    }
  });
})();
</script>
`;
export default {
    title: 'Components/Table Components/Table/Manual Initialization',
    parameters: {
        docs: {
            description: {
                component: 'Examples demonstrating manual table initialization using the disable_auto_init prop. This provides precise control over when and how the at-table component is initialized, useful for complex scenarios requiring custom setup or external grid management.',
            },
        },
    },
};
const sampleData = {
    col_defs: [
        {
            flex: 1,
            field: 'product_name',
            colId: 'product_name',
            headerName: 'Product Name',
            sortable: true,
        },
        {
            flex: 1,
            field: 'category',
            colId: 'category',
            headerName: 'Category',
            sortable: true,
        },
        {
            flex: 1,
            field: 'price',
            colId: 'price',
            headerName: 'Price',
            sortable: true,
        },
        {
            flex: 1,
            field: 'stock',
            colId: 'stock',
            headerName: 'Stock',
            sortable: true,
        },
    ],
    table_data: {
        items: [
            {
                _id: '1',
                product_name: 'Wireless Headphones',
                category: 'Electronics',
                price: '$99.99',
                stock: '25',
            },
            {
                _id: '2',
                product_name: 'Running Shoes',
                category: 'Sports',
                price: '$129.99',
                stock: '15',
            },
            {
                _id: '3',
                product_name: 'Coffee Mug',
                category: 'Kitchen',
                price: '$12.99',
                stock: '100',
            },
            {
                _id: '4',
                product_name: 'Notebook',
                category: 'Office',
                price: '$8.99',
                stock: '50',
            },
            {
                _id: '5',
                product_name: 'Smartphone Case',
                category: 'Electronics',
                price: '$24.99',
                stock: '30',
            },
            {
                _id: '6',
                product_name: 'Desk Lamp',
                category: 'Office',
                price: '$45.99',
                stock: '12',
            },
            {
                _id: '7',
                product_name: 'Water Bottle',
                category: 'Sports',
                price: '$19.99',
                stock: '75',
            },
            {
                _id: '8',
                product_name: 'Kitchen Scale',
                category: 'Kitchen',
                price: '$35.99',
                stock: '8',
            },
        ],
        total: 8,
    },
};
export const ManualInitialization = {
    args: {
        ...sampleData,
        page_size: 5,
    },
    render: ManualInitTemplate,
    parameters: {
        docs: {
            description: {
                story: 'Demonstrates manual table initialization where the user must click a button to initialize the table. This pattern is useful when you need to perform setup operations or wait for external dependencies before the table is created.',
            },
        },
    },
};
export const DelayedInitialization = {
    args: {
        ...sampleData,
        page_size: 5,
    },
    render: DelayedInitTemplate,
    parameters: {
        docs: {
            description: {
                story: 'Shows a delayed initialization pattern where the table is automatically initialized after a countdown. This simulates scenarios where you might need to wait for external dependencies, API calls, or other asynchronous operations before initializing the table.',
            },
        },
    },
};
export const ConditionalInitialization = {
    args: {
        ...sampleData,
        page_size: 5,
    },
    render: ConditionalInitTemplate,
    parameters: {
        docs: {
            description: {
                story: 'Demonstrates conditional initialization where table features are configured based on user preferences before initialization. This pattern is useful for customizable table implementations where different features like pagination and sorting can be enabled/disabled dynamically.',
            },
        },
    },
};
export const ExternalGridApiManagement = {
    args: {
        ...sampleData,
        page_size: 5,
    },
    render: ExternalGridApiTemplate,
    parameters: {
        docs: {
            description: {
                story: 'Shows how to use external grid API management where a grid is created independently and then attached to the table component. This pattern is useful for scenarios where multiple components need to share a grid instance or when the grid lifecycle is managed by a parent component.',
            },
        },
    },
};
