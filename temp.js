const data = [
  {
    'discoveredLabels': {
      '__address__': 'localhost:9093',
      '__metrics_path__': '/metrics',
      '__scheme__': 'http',
      'job': 'alertmanager'
    },
    'labels': {
      'instance': 'localhost:9093',
      'job': 'alertmanager'
    },
    'scrapePool': 'alertmanager',
    'scrapeUrl': 'http://localhost:9093/metrics',
    'globalUrl': 'http://moeen-System-Product-Name:9093/metrics',
    'lastError': '',
    'lastScrape': '2022-04-11T09:26:54.998309205+04:30',
    'lastScrapeDuration': 0.004036388,
    'health': 'up'
  },
  {
    'discoveredLabels': {
      '__address__': 'localhost:9115',
      '__metrics_path__': '/metrics',
      '__scheme__': 'http',
      'job': 'blackbox_local'
    },
    'labels': {
      'instance': 'localhost:9115',
      'job': 'blackbox_local'
    },
    'scrapePool': 'blackbox_local',
    'scrapeUrl': 'http://localhost:9115/metrics',
    'globalUrl': 'http://moeen-System-Product-Name:9115/metrics',
    'lastError': '',
    'lastScrape': '2022-04-11T09:27:03.317058023+04:30',
    'lastScrapeDuration': 0.001430491,
    'health': 'up'
  },
  {
    'discoveredLabels': {
      '__address__': '192.168.49.56:9115',
      '__metrics_path__': '/metrics',
      '__scheme__': 'http',
      'job': 'blackbox_node1'
    },
    'labels': {
      'instance': '192.168.49.56:9115',
      'job': 'blackbox_node1'
    },
    'scrapePool': 'blackbox_node1',
    'scrapeUrl': 'http://192.168.49.56:9115/metrics',
    'globalUrl': 'http://192.168.49.56:9115/metrics',
    'lastError': '',
    'lastScrape': '2022-04-11T09:27:07.437070398+04:30',
    'lastScrapeDuration': 0.006638725,
    'health': 'up'
  },
  {
    'discoveredLabels': {
      '__address__': '192.168.49.57:9115',
      '__metrics_path__': '/metrics',
      '__scheme__': 'http',
      'job': 'blackbox_node2'
    },
    'labels': {
      'instance': '192.168.49.57:9115',
      'job': 'blackbox_node2'
    },
    'scrapePool': 'blackbox_node2',
    'scrapeUrl': 'http://192.168.49.57:9115/metrics',
    'globalUrl': 'http://192.168.49.57:9115/metrics',
    'lastError': '',
    'lastScrape': '2022-04-11T09:26:55.045731456+04:30',
    'lastScrapeDuration': 0.005657614,
    'health': 'up'
  },
  {
    'discoveredLabels': {
      '__address__': 'https://www.google.com',
      '__metrics_path__': '/probe',
      '__param_module': 'http_2xx',
      '__scheme__': 'http',
      'job': 'node1-http'
    },
    'labels': {
      'instance': 'https://www.google.com',
      'job': 'node1-http'
    },
    'scrapePool': 'node1-http',
    'scrapeUrl': 'http://192.168.49.56:9115/probe?module=http_2xx&target=https%3A%2F%2Fwww.google.com',
    'globalUrl': 'http://192.168.49.56:9115/probe?module=http_2xx&target=https%3A%2F%2Fwww.google.com',
    'lastError': '',
    'lastScrape': '2022-04-11T09:26:58.60482571+04:30',
    'lastScrapeDuration': 0.127633935,
    'health': 'up'
  },
  {
    'discoveredLabels': {
      '__address__': 'https://chat.partdp.ir',
      '__metrics_path__': '/probe',
      '__param_module': 'http_2xx',
      '__scheme__': 'http',
      'job': 'node1-http'
    },
    'labels': {
      'instance': 'https://chat.partdp.ir',
      'job': 'node1-http'
    },
    'scrapePool': 'node1-http',
    'scrapeUrl': 'http://192.168.49.56:9115/probe?module=http_2xx&target=https%3A%2F%2Fchat.partdp.ir',
    'globalUrl': 'http://192.168.49.56:9115/probe?module=http_2xx&target=https%3A%2F%2Fchat.partdp.ir',
    'lastError': '',
    'lastScrape': '2022-04-11T09:27:01.618538552+04:30',
    'lastScrapeDuration': 0.125516,
    'health': 'up'
  },
  {
    'discoveredLabels': {
      '__address__': 'https://gitlab.partdp.ir',
      '__metrics_path__': '/probe',
      '__param_module': 'http_2xx',
      '__scheme__': 'http',
      'job': 'node1-http'
    },
    'labels': {
      'instance': 'https://gitlab.partdp.ir',
      'job': 'node1-http'
    },
    'scrapePool': 'node1-http',
    'scrapeUrl': 'http://192.168.49.56:9115/probe?module=http_2xx&target=https%3A%2F%2Fgitlab.partdp.ir',
    'globalUrl': 'http://192.168.49.56:9115/probe?module=http_2xx&target=https%3A%2F%2Fgitlab.partdp.ir',
    'lastError': '',
    'lastScrape': '2022-04-11T09:26:57.719360925+04:30',
    'lastScrapeDuration': 0.456198444,
    'health': 'up'
  },
  {
    'discoveredLabels': {
      '__address__': '142.251.39.110',
      '__metrics_path__': '/probe',
      '__param_module': 'icmp',
      '__scheme__': 'http',
      'job': 'node1-ping'
    },
    'labels': {
      'instance': '142.251.39.110',
      'job': 'node1-ping'
    },
    'scrapePool': 'node1-ping',
    'scrapeUrl': 'http://192.168.49.56:9115/probe?module=icmp&target=142.251.39.110',
    'globalUrl': 'http://192.168.49.56:9115/probe?module=icmp&target=142.251.39.110',
    'lastError': '',
    'lastScrape': '2022-04-11T09:26:57.94281609+04:30',
    'lastScrapeDuration': 5.009180559,
    'health': 'up'
  },
  {
    'discoveredLabels': {
      '__address__': '192.168.10.20',
      '__metrics_path__': '/probe',
      '__param_module': 'icmp',
      '__scheme__': 'http',
      'job': 'node1-ping'
    },
    'labels': {
      'instance': '192.168.10.20',
      'job': 'node1-ping'
    },
    'scrapePool': 'node1-ping',
    'scrapeUrl': 'http://192.168.49.56:9115/probe?module=icmp&target=192.168.10.20',
    'globalUrl': 'http://192.168.49.56:9115/probe?module=icmp&target=192.168.10.20',
    'lastError': '',
    'lastScrape': '2022-04-11T09:27:02.957994374+04:30',
    'lastScrapeDuration': 0.018858517,
    'health': 'up'
  },
  {
    'discoveredLabels': {
      '__address__': '192.168.1.99',
      '__metrics_path__': '/probe',
      '__param_module': 'icmp',
      '__scheme__': 'http',
      'job': 'node1-ping'
    },
    'labels': {
      'instance': '192.168.1.99',
      'job': 'node1-ping'
    },
    'scrapePool': 'node1-ping',
    'scrapeUrl': 'http://192.168.49.56:9115/probe?module=icmp&target=192.168.1.99',
    'globalUrl': 'http://192.168.49.56:9115/probe?module=icmp&target=192.168.1.99',
    'lastError': '',
    'lastScrape': '2022-04-11T09:27:08.582594681+04:30',
    'lastScrapeDuration': 0.006846921,
    'health': 'up'
  },
  {
    'discoveredLabels': {
      '__address__': 'https://chat.partdp.ir',
      '__metrics_path__': '/probe',
      '__param_module': 'http_2xx',
      '__scheme__': 'http',
      'job': 'node2-http'
    },
    'labels': {
      'instance': 'https://chat.partdp.ir',
      'job': 'node2-http'
    },
    'scrapePool': 'node2-http',
    'scrapeUrl': 'http://192.168.49.57:9115/probe?module=http_2xx&target=https%3A%2F%2Fchat.partdp.ir',
    'globalUrl': 'http://192.168.49.57:9115/probe?module=http_2xx&target=https%3A%2F%2Fchat.partdp.ir',
    'lastError': '',
    'lastScrape': '2022-04-11T09:27:07.070354243+04:30',
    'lastScrapeDuration': 0.133980381,
    'health': 'up'
  },
  {
    'discoveredLabels': {
      '__address__': 'https://gitlab.partdp.ir',
      '__metrics_path__': '/probe',
      '__param_module': 'http_2xx',
      '__scheme__': 'http',
      'job': 'node2-http'
    },
    'labels': {
      'instance': 'https://gitlab.partdp.ir',
      'job': 'node2-http'
    },
    'scrapePool': 'node2-http',
    'scrapeUrl': 'http://192.168.49.57:9115/probe?module=http_2xx&target=https%3A%2F%2Fgitlab.partdp.ir',
    'globalUrl': 'http://192.168.49.57:9115/probe?module=http_2xx&target=https%3A%2F%2Fgitlab.partdp.ir',
    'lastError': '',
    'lastScrape': '2022-04-11T09:27:06.845161518+04:30',
    'lastScrapeDuration': 0.265642018,
    'health': 'up'
  },
  {
    'discoveredLabels': {
      '__address__': 'https://www.google.com',
      '__metrics_path__': '/probe',
      '__param_module': 'http_2xx',
      '__scheme__': 'http',
      'job': 'node2-http'
    },
    'labels': {
      'instance': 'https://www.google.com',
      'job': 'node2-http'
    },
    'scrapePool': 'node2-http',
    'scrapeUrl': 'http://192.168.49.57:9115/probe?module=http_2xx&target=https%3A%2F%2Fwww.google.com',
    'globalUrl': 'http://192.168.49.57:9115/probe?module=http_2xx&target=https%3A%2F%2Fwww.google.com',
    'lastError': '',
    'lastScrape': '2022-04-11T09:26:57.951963383+04:30',
    'lastScrapeDuration': 0.007052023,
    'health': 'up'
  },
  {
    'discoveredLabels': {
      '__address__': '142.251.39.110',
      '__metrics_path__': '/probe',
      '__param_module': 'icmp',
      '__scheme__': 'http',
      'job': 'node2-ping'
    },
    'labels': {
      'instance': '142.251.39.110',
      'job': 'node2-ping'
    },
    'scrapePool': 'node2-ping',
    'scrapeUrl': 'http://192.168.49.57:9115/probe?module=icmp&target=142.251.39.110',
    'globalUrl': 'http://192.168.49.57:9115/probe?module=icmp&target=142.251.39.110',
    'lastError': '',
    'lastScrape': '2022-04-11T09:26:58.267354335+04:30',
    'lastScrapeDuration': 5.00580983,
    'health': 'up'
  },
  {
    'discoveredLabels': {
      '__address__': '192.168.10.20',
      '__metrics_path__': '/probe',
      '__param_module': 'icmp',
      '__scheme__': 'http',
      'job': 'node2-ping'
    },
    'labels': {
      'instance': '192.168.10.20',
      'job': 'node2-ping'
    },
    'scrapePool': 'node2-ping',
    'scrapeUrl': 'http://192.168.49.57:9115/probe?module=icmp&target=192.168.10.20',
    'globalUrl': 'http://192.168.49.57:9115/probe?module=icmp&target=192.168.10.20',
    'lastError': '',
    'lastScrape': '2022-04-11T09:27:07.481216513+04:30',
    'lastScrapeDuration': 0.019095832,
    'health': 'up'
  },
  {
    'discoveredLabels': {
      '__address__': '192.168.1.99',
      '__metrics_path__': '/probe',
      '__param_module': 'icmp',
      '__scheme__': 'http',
      'job': 'node2-ping'
    },
    'labels': {
      'instance': '192.168.1.99',
      'job': 'node2-ping'
    },
    'scrapePool': 'node2-ping',
    'scrapeUrl': 'http://192.168.49.57:9115/probe?module=icmp&target=192.168.1.99',
    'globalUrl': 'http://192.168.49.57:9115/probe?module=icmp&target=192.168.1.99',
    'lastError': '',
    'lastScrape': '2022-04-11T09:27:09.063769497+04:30',
    'lastScrapeDuration': 0.006678273,
    'health': 'up'
  },
  {
    'discoveredLabels': {
      '__address__': 'localhost:9100',
      '__metrics_path__': '/metrics',
      '__scheme__': 'http',
      'job': 'node_exporter_metrics'
    },
    'labels': {
      'instance': 'localhost:9100',
      'job': 'node_exporter_metrics'
    },
    'scrapePool': 'node_exporter_metrics',
    'scrapeUrl': 'http://localhost:9100/metrics',
    'globalUrl': 'http://moeen-System-Product-Name:9100/metrics',
    'lastError': '',
    'lastScrape': '2022-04-11T09:27:05.359933107+04:30',
    'lastScrapeDuration': 0.034782119,
    'health': 'up'
  },
  {
    'discoveredLabels': {
      '__address__': 'localhost:9090',
      '__metrics_path__': '/metrics',
      '__scheme__': 'http',
      'job': 'prometheus'
    },
    'labels': {
      'instance': 'localhost:9090',
      'job': 'prometheus'
    },
    'scrapePool': 'prometheus',
    'scrapeUrl': 'http://localhost:9090/metrics',
    'globalUrl': 'http://moeen-System-Product-Name:9090/metrics',
    'lastError': '',
    'lastScrape': '2022-04-11T09:27:06.928020229+04:30',
    'lastScrapeDuration': 0.012791205,
    'health': 'up'
  }
];



const jobs = data.map(targets=> targets.labels.job) ;

