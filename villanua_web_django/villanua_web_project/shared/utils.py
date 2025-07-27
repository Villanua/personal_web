import os
import logging
from dotenv import load_dotenv

load_dotenv()

# Configure logger to use the basic logging format
logger = logging.getLogger(__name__)
if not logger.hasHandlers():  # Only add handler if no handlers exist
    handler = logging.StreamHandler()
    formatter = logging.Formatter('%(levelname)s:%(filename)s:%(lineno)d:%(message)s')  # Format with source info
    handler.setFormatter(formatter)
    logger.addHandler(handler)
if eval(os.environ.get("DEBUG", "False")):
    logger.setLevel(logging.DEBUG)