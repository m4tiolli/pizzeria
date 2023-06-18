using KDS_Pizzeria.Componentes;
using KDS_Pizzeria.DAO;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace KDS_Pizzeria
{
    public partial class FormKDS : Form
    {
        private List<int> PedidosExibidos = new List<int>();
        public FormKDS()
        {
            InitializeComponent();
            this.timerKDS.Start();
        }

        private void TimerKDS_Tick(object sender, EventArgs e)
        {          
                var dao = new PedidoDAO();
                var pedidos = dao.ListarPedidos();

                foreach (var pedido in pedidos)
                {
                    if (PedidosExibidos.Any(p => p == pedido.ID))
                    {
                        continue;
                    }
                    else
                    {
                        PedidosExibidos.Add(pedido.ID);

                        var componentePedido = ComponentesKDS.CriarPedido(pedido);
                        this.panelKDS.Controls.Add(componentePedido);
                    }
                }
            
        }

        private void FormKDS_Load(object sender, EventArgs e)
        {

        }
    }
}
